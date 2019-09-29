
import React from 'react'

export const PersonForm = ({persons, setPersons, newName, newPhone, setNewName, setNewPhone }) => {

    const addNewPerson = (event) => {
        event.preventDefault();
        setPersons(persons.concat({ name: newName, number: newPhone }));
    }
    const handleNoteChange = (event) => { event.preventDefault(); setNewName(event.target.value); }
    const handleMobileChange = (event) => { event.preventDefault(); setNewPhone(event.target.value); }

    return (
        <div>
            <form onSubmit={addNewPerson}>
                <div>
                    name: <input type="text" onChange={handleNoteChange} />
                    mobile: <input type="text" mask="00 000 00000" onChange={handleMobileChange} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )

}

export default PersonForm;