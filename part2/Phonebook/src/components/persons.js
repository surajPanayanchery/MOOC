import React from 'react'
import phoneService from '../services/phonebook.service';

export const Persons = ({ filterKey, persons, setPersons, setMessage, setType, setNewName, setNewPhone, setIndex }) => {
    const deleteThisPerson = (id) => {
        if (id !== undefined) {
            window.confirm('Do you want to delete'); phoneService.deletePerson(id)
                .then(() => { setMessage('Successfully Deleted'); setType('deleted'); phoneService.getAll().then(data => setPersons(data)) })
                .catch(() => { setType('error'); setMessage('Cannot find person in DB. Please contact IT Helpdesk'); });
        }
    }

    const updatePerson = (person) => {
        setNewName(person.name);
        setNewPhone(person.number);
        console.log(person.id)
        setIndex(person.id);

    }
    const showPersons = () => personsToShow().map(person => {
        return (
            <li key={person.id}>
                {person.name}   {person.number}
                <button onClick={() => deleteThisPerson(person.id)}>delete</button>
                <button onClick={() => updatePerson(person)}>Update</button>
            </li>)
    })
    const personsToShow = () => filterKey ? persons.filter(person => person.name.includes(filterKey)) : persons;

    return (
        <ul>
            {showPersons()}
        </ul>
    )
}

export default Persons