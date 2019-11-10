import React from 'react'
import phoneService from '../services/phonebook.service';

export const Persons = ({ filterKey, persons, setPersons, setMessage, setType, setNewName, setNewPhone, setIndex }) => {
    const deleteThisPerson = (id) => {
        if (id !== undefined) {
            window.confirm('Do you want to delete'); phoneService.deletePerson(id)
                .then(() => { window.scrollTo(0, 0); setMessage('Successfully Deleted'); setType('deleted'); phoneService.getAll().then(data => setPersons(data)) })
                .catch(() => {window.scrollTo(0, 0); setType('error'); setMessage('Cannot find person in DB. Please contact IT Helpdesk'); });
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
            <li className="custom-list-item" key={person.id}>
                <div className="list-content-item" >
                    {person.name}
                </div>
                <div className="list-content-item" >
                    {person.number}
                </div>

                <div>
                    <span className="list-content-item"><button className="custom-buttom" onClick={() => deleteThisPerson(person.id)}>Delete</button></span>
                    <span className="list-content-item"><button className="custom-buttom" onClick={() => updatePerson(person)}>Update</button></span>
                </div>



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