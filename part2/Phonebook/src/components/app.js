import React, { useState, useEffect } from 'react'
import Filter from './filter'
import PersonForm from './person-form'
import Persons from './persons'
import phoneService from '../services/phonebook.service';
import Notification from './notification'


const App = () => {
    const [persons, setPersons] = useState([{ name: 'Arto Hellas', number: '+195-156-15648546' }]);
    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState('')
    const [filter, setFilter] = useState('');
    const [message, setMessage] = useState('');
    const [type, setType] = useState('');
    const [index, setIndex] = useState();

    const hook = () => {
        phoneService.getAll().then(data => setPersons(data));

    }

    useEffect(hook, [])




    return (
        <div>
            <Notification message={message} type={type} setMessage={setMessage} setType={setType} />
            <h2>Phonebook</h2>
            <Filter setFilter={setFilter} />
            <PersonForm persons={persons} setPersons={setPersons} newName={newName} newPhone={newPhone} setNewName={setNewName} setNewPhone={setNewPhone} setMessage={setMessage} setType={setType} index={index} />
            <h2>Numbers</h2>
            <Persons filterKey={filter} persons={persons} setPersons={setPersons} setMessage={setMessage} setType={setType} setNewName={setNewName} setNewPhone={setNewPhone} setIndex={setIndex} />
        </div>
    )
}

export default App