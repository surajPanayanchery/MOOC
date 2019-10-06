
import React from 'react'
import phoneService from '../services/phonebook.service';

export const PersonForm = ({ persons, setPersons, newName, newPhone, setNewName, setNewPhone, setMessage, setType, index }) => {

    const addNewPerson = (event) => {
        event.preventDefault();
        let match = false;
        persons.map((person) => { return person.name === newName ? match = true : false })
        if (match) { alert(`${newName} has been alread added`) }
        else {
            phoneService.create({ name: newName, number: newPhone })
                .then(() => phoneService.getAll().then((data) => { setMessage('Successfully Added'); setType('success'); setPersons(data); }))
                .catch((err)=>{console.log(err.response);setType('error'); setMessage(err.response.data.error); })
        }
    }

    const updatePerson = () => {
        console.log(index);
        phoneService.update(index, { name: newName, number: newPhone })
            .then(() => phoneService.getAll().then((data) => { setMessage('Successfully Updated'); setType('updated'); setPersons(data); }))
            .catch(() => { setType('error'); setMessage('Cannot find person in DB. Please contact IT Helpdesk'); });
    }
    const handleNoteChange = (event) => { event.preventDefault(); setNewName(event.target.value); }
    const handleMobileChange = (event) => { event.preventDefault(); setNewPhone(event.target.value); }

    return (
        <div>
            Add A new person
            <form onSubmit={addNewPerson}>
                <div>
                    name: <input value={newName} type="text" onChange={handleNoteChange} />
                    mobile: <input type="text" value={newPhone} mask="00 000 00000" onChange={handleMobileChange} />
                </div>
                <div>
                    <button type="submit">add</button>
                    <input type="button" onClick={() => updatePerson()} value="Update" />
                </div>
            </form>
        </div>
    )

}

export default PersonForm;