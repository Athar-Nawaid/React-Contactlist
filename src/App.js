import React from 'react';
import Navbar from "./features/Navbar/Navbar.jsx"
import ContactList from "./features/Contact/Contact.jsx"
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ContactList/>
    </div>
  );
}

export default App;
