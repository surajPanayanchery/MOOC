
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
                .then(() => { setNewName(''); setNewNumber(''); console.log('getAll'); phoneService.getAll().then((data) => {window.scrollTo(0, 0); setMessage('Successfully Added'); setType('success'); setPersons(data); }) })
                .catch((err) => { console.log(err.response); setType('error'); window.scrollTo(0, 0); setMessage(err.response.data.error); })
        }
    }

    const updatePerson = () => {
        console.log(index);
        phoneService.update(index, { name: newName, number: newPhone })
            .then(() => phoneService.getAll().then((data) => { window.scrollTo(0, 0); setMessage('Successfully Updated'); setType('updated'); setPersons(data); }))
            .catch(() => { window.scrollTo(0, 0); setType('error'); setMessage('Cannot find person in DB. Please contact IT Helpdesk'); });
    }
    const handleNoteChange = (event) => { event.preventDefault(); setNewName(event.target.value); }
    const handleMobileChange = (event) => { event.preventDefault(); setNewPhone(event.target.value); }

    return (
        <div className="person-form">
            <div className="custom-border">
                <h3>Add A new person</h3>
                <form onSubmit={addNewPerson}>
                    <div className="custom-input">
                        name: <input value={newName} type="text" onChange={handleNoteChange} />
                    </div>
                    <div className="custom-input">
                        mobile: <input type="text" value={newPhone} mask="00 000 00000" onChange={handleMobileChange} />
                    </div>

                    <div className="button-group">
                        <button className="custom-buttom" type="submit">add</button>
                        <input type="button" className="custom-buttom" onClick={() => updatePerson()} value="Update" />
                    </div>
                </form>
            </div>
        </div>
    )

}

export default PersonForm;