import React from 'react'
import phoneService from '../services/phonebook.service';

export const Persons = ({ filterKey, persons, setPersons }) => {
    const deleteThisPerson = (id) => {
        if (id !== undefined) { alert('Do you want to delete'); phoneService.deletePerson(id).then(() => phoneService.getAll().then(data => setPersons(data))); }
    }
    const showPersons = () => personsToShow().map(person => { return (<li key={person.id}>{person.name}   {person.number}   <button onClick={() => deleteThisPerson(person.id)}>delete</button></li>) })
    const personsToShow = () => filterKey ? persons.filter(person => person.name.includes(filterKey)) : persons;

    return (
        <ul>
            {showPersons()}
        </ul>
    )
}

export default Persons