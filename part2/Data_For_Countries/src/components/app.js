import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './filter'
import Countries from './countries'



const App = () => {

    const [filter, setFilter] = useState();
    const [countries, setCountries] = useState([]);


    const hook = () => {
        const promise = axios.get('https://restcountries.eu/rest/v2/all');
        promise.then((response) => {
            console.log(response.data);
            setCountries(response.data);
        })
    }

    useEffect(hook, [])

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter setFilter={setFilter} />
            <Countries filterKey={filter} countries={countries} />

        </div>
    )
}

export default App