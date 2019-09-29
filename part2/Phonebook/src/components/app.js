import React, { useState, useEffect } from 'react'
import Filter from './filter'
import PersonForm from './person-form'
import Persons from './persons'
import phoneService from '../services/phonebook.service';


const App = () => {
    const [persons, setPersons] = useState([{ name: 'Arto Hellas', number: '+195-156-15648546' }]);
    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState('')
    const [filter, setFilter] = useState('');

    const hook = () => {
        phoneService.getAll().then(data => setPersons(data));

    }

    useEffect(hook, [])




    return (
        <div>
            <h2>Phonebook</h2>
            <Filter setFilter={setFilter} />
            <PersonForm persons={persons} setPersons={setPersons} newName={newName} newPhone={newPhone} setNewName={setNewName} setNewPhone={setNewPhone} />
            <h2>Numbers</h2>
            <Persons filterKey={filter} persons={persons} setPersons={setPersons} />
        </div>
    )
}

export default App