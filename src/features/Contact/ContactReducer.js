import {createSlice} from '@reduxjs/toolkit';
import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
;


let INITIAL_STATE = {contacts:[],count:100};

export const getInitialStateAsync = createAsyncThunk(
    'contact/getInitialState',
    async(arg,thunkAPI)=>{
        let res = await axios.get('https://jsonplaceholder.typicode.com/users');
        return res.data;
    }
)

export const addAsync = createAsyncThunk(
    'contact/addAsync',
    async(payload)=>{
        console.log("payload")
        console.log(payload)

        let response = await fetch("https://jsonplaceholder.typicode.com/users",{
            method:"POST",
            body:JSON.stringify({
    
                id: payload.count,
                name: payload.name,
                email: payload.email,
                phone: payload.phone
            }),
            headers: {
            'Content-type': 'application/json; charset=UTF-8',
            },
        })

        return response.json();
    }
)

export const deleteAsync = createAsyncThunk(
    'contact/deleteAsync',
    async (payload)=>{
            console.log("payload")
            console.log(payload)
        let response = await fetch(`https://jsonplaceholder.typicode.com/users/${payload.id}`,{
            method: "DELETE",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        
        return response.json();
    }
)
export const updateAsync = createAsyncThunk(
    'contact/updateAsync',
    async (payload)=>{
        // console.log("payload")
        // console.log(payload.id)
        let response = await fetch(`https://jsonplaceholder.typicode.com/users/${payload.id}`,{
            method: "PUT",
            body: JSON.stringify({
                id: payload.id,
                name: payload.name,
                email: payload.email,
                phone: payload.phone,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        });
        
        return payload;
    }
)

let contactSlice = createSlice({
    name:'contact',
    initialState:INITIAL_STATE,
    reducers:{
        add:(state,action)=>{
            let data = action.payload;
            data.id = state.count;
            state.count = state.count++;
            state.contacts = [...state.contacts,data]
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getInitialStateAsync.fulfilled,(state,action)=>{
            state.contacts = [...action.payload];
            
        })
        .addCase(updateAsync.fulfilled,(state,action)=>{
            // console.log("Action payload");
            // console.log(action.payload);
            let id = action.payload.id;
            // console.log(id);
            let index = state.contacts.findIndex(contact=>contact.id==id);
            state.contacts[index] = action.payload;
        })
        .addCase(deleteAsync.fulfilled,(state,action)=>{
            // console.log("delete")
            let id = action.meta.arg;
            state.contacts = state.contacts.filter(contact=> id!=contact.id);
            
        })
        .addCase(addAsync.fulfilled,(state,action)=>{
            // console.log("add");
            // console.log(action.payload);
            state.contacts.push(action.payload);
            state.count = state.count+1;

        })
    }
})

export const contactReducer = contactSlice.reducer;
export const contactSelector = (state)=>state.contact;
export const contactActions = contactSlice.actions;