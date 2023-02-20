import './App.css';
import React,{useState,useEffect} from 'react';
import Header from './Components/Header';
import AddContact from './Components/AddContact';
import ContactList from './Components/ContactList';
function App() {
  const [contacts,setContacts] = useState([]); 
  const LOCAL_STORAGE_KEY = 'contacts';
  const addContactHandler = (contact) => {
    setContacts(...contacts , contact);
  }

  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retrieveContacts) setContacts(retrieveContacts);
  },[])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY ,  JSON.stringify(contacts))
  },[contacts])
  return (
    <div className='ui container'>
      <Header />
      <AddContact />
      <ContactList contacts = {contacts} />
    </div>
  );
}

export default App;
