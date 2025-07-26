import styles from "./Contact.module.css";

import { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { deleteAsync,updateAsync, getInitialStateAsync } from "./ContactReducer";
import { contactSelector } from "./ContactReducer";
import { contactActions } from "./ContactReducer";
import { addAsync } from "./ContactReducer";


export default function ContactList(){
    const [contact,setContact] = useState(null);
    const [showForm,setShowForm] = useState(false);
    const [operation,setOperation] = useState('add');
    let dispatch = useDispatch();
    const contactReducer = useSelector(contactSelector)
    useEffect(()=>{
        
        // @ts-ignore
        dispatch(getInitialStateAsync());
    },[]);
    
    const handleShowForm=(contact,value)=>{
        setOperation(value);
        if(contact){
            setContact(contact);
        }
        setShowForm(!showForm);
        
        
    }
    return(
        <div className={styles.container}>
            {showForm?<Form handleShowForm={handleShowForm} contact={contact} operation={operation}/>:<></>} 
            <div className={styles.listCont}>
                <button className={styles.addContact} onClick={()=>handleShowForm(null,"add")}>Add Contact</button>
           
                {
                    
                    contactReducer.contacts.map((contact)=>(
                        
                        <div className={styles.list} key={contact.id}>   
                            <div className={styles.data}>
                                <h3>{contact.name}</h3>
                                <h3>{contact.email}</h3>
                                <h3>{contact.phone}</h3>

                            </div>
                                <div className={styles.buttonCont}>
                                <button className={`${styles.edit} ${styles.gButton} `} onClick={()=>handleShowForm(contact,"update")}>Edit</button>
                                <button className={`${styles.delete} ${styles.gButton} `} onClick={()=>dispatch(deleteAsync(contact.id))}>Delete</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

function Form(props){
        const[id,setNewId] = useState("");
        const[newName,setNewName] = useState("");
        const[newPhone,setNewPhone] = useState("");
        const[newEmail,setNewEmail] = useState("");
        const[newOperation,setNewOperation] = useState(props.operation);
        const{handleShowForm,operation} = props;


    useEffect(()=>{
        if(props.contact){

            const{id,name,email,phone,operation} = props.contact;
            setNewId(id);
            setNewName(name);
            setNewEmail(email);
            setNewPhone(phone);
        }
    },[])
    
    

    let dispatch = useDispatch();


    const handleUpdate = ()=>{
        // @ts-ignore
        dispatch(updateAsync({id:id,name:newName,phone:newPhone,email:newEmail}));
        handleShowForm();
    }

    const handleAdd = ()=>{
        // @ts-ignore
        dispatch(addAsync({name:newName,email:newEmail,phone:newPhone}));
        handleShowForm();
    }

    return(
        <div className={styles.formContainer}>
            <h2>{operation=="add"?"Add":"Update"}</h2>
            <input value={newName} onChange={(e)=>setNewName(e.target.value)} placeholder="Name"/>
            <input value={newPhone} onChange={(e)=>setNewPhone(e.target.value)} placeholder="Phone"/>
            <input value={newEmail} onChange={(e)=>setNewEmail(e.target.value)} placeholder="Email"/>

            <div>
                <button className={`${styles.edit} ${styles.gButton}`} onClick={newOperation=='update'?handleUpdate:handleAdd}>{newOperation === 'update' ? 'Update Contact' : 'Add Contact'}</button>
                <button className={`${styles.delete} ${styles.gButton} `} onClick={handleShowForm}>Cancel</button>
            </div>
        </div>
    )
}