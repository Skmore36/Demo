import React from 'react';
//import ContactCard from './ContactCard';
const ContactList = (props) =>{
    const renderContactList = props.contacts.map((contact) =>{
        return(
           //
            <div><ContactCard contact={contact} /></div>
           
            <div className='item'>
                <div className='content'>
                    <div className='header'>{contact.name}</div>
                    <div>{contact.email}</div>
                </div>
                <i className='trash alternate outline icon'>
            
                </i>
            </div>
        )
    })
    return(
        <div className='ui celled list'>
            {renderContactList}
        </div>    
    )
}
export default ContactList;