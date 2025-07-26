import { configureStore } from '@reduxjs/toolkit';
import {contactReducer} from '../features/Contact/ContactReducer.js';

export const store = configureStore({
  reducer: {
    contact:contactReducer
  },
});
