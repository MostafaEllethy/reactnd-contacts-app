import React, { useState, useEffect } from 'react';
import * as ContactsAPI from './utils/ContactsAPI'
import ListContacts from './ListContacts';
import CreateContact from './CreateContact'
import { Routes, Route, useNavigate } from 'react-router-dom'

function App() {
    let navigate = useNavigate();
    const [contacts, setContacts] = useState([])
    useEffect(() => {
        ContactsAPI.getAll().then(contacts => {
            setContacts(contacts)
        })
    });
    let removeContact = (contact) => {
        setContacts(prev => prev.filter(obj => obj.id !== contact.id), ContactsAPI.remove(contact))
    }

    let onCreateContact = (contact) => {
        ContactsAPI.create(contact).then(response => setContacts(prev => prev.concat(response), navigate('/')))
    }
    return (
        <Routes>
            <Route exact path='/' element={
                <ListContacts contacts={contacts} onRemoveContact={removeContact} />
            } />
            <Route exact path='/create' element={<CreateContact onCreateContact={onCreateContact} />} />
        </Routes>
    );
}

export default App;
