# 📇 React Contact List App

This is a simple Contact Management application built using **React** and **Redux Toolkit**. It allows you to view, add, update, and delete contacts. All data is fetched and updated using the mock API from [JSONPlaceholder](https://jsonplaceholder.typicode.com).

---

## 🚀 Features

- 📥 Fetch contact list from API
- ➕ Add a new contact (mocked using POST)
- 🔄 Update existing contact details
- ❌ Delete a contact (mocked using DELETE)
- 🧠 Global state management with Redux Toolkit
- ✨ CSS Module styling

---

## 🛠️ Technologies Used

- React
- Redux Toolkit
- React Redux
- Axios / Fetch API
- CSS Modules
- JSONPlaceholder (for API mocking)

---

## 📂 Project Structure

src/                                                                                                                                                                
├── app/                                                                                                                                                            
│   └── store.js                     # Redux store configuration                                                                                                    
│                                                                                                                                                                   
├── features/                                                                                                                                                       
│   ├── Contact/                                                                                                                                                    
│   │   ├── Contact.jsx              # Main ContactList component                                                                                                   
│   │   ├── Contact.module.css       # CSS module for styling contact list and form                                                                                 
│   │   └── ContactReducer.js        # Redux slice and async thunks for contacts                                                                                    
│   │                                                                                                                                                               
│   └── Navbar/                                                                                                                                                     
│       ├── Navbar.jsx               # Navigation bar component (optional or reusable)                                                                              
│       └── Navbar.module.css        # Styling for Navbar
│                                                                                                                                                                   
├── index.js                         # Entry point                                                                                                                  
├── App.js                           # Root component                                                                                                               
└── App.css / App.module.css         # Global or scoped styles                                                                                                                                                                                                                                                                     

## Install dependencies
npm install 

## Start the development server
npm start


📌 Notes
-This project uses the JSONPlaceholder API which is a mock API. Any changes (add/update/delete) are not persisted.
-Contact IDs are generated manually in local state for demonstration.
-You can extend this project by connecting it to a real backend like Firebase, Supabase, or your own Express API.

🧑‍💻 Author
Athar Nawaid
GitHub: @Athar-Nawaid
