import React,{useState} from 'react'
import Country from './country';


export const Countries = ({ filterKey, countries }) => {
    const [show, setShow] = useState();
    const showCountries = () => countriesToShow().map((person, index) => { return (<li key={person.name}>{person.name} <button onClick={() => setCountry(person.name)}>show</button></li>) })
    const countriesToShow = () => filterKey ? countries.filter(country => country.name.includes(filterKey)) : countries;
    const setCountry = (name) => { setShow(name); };    
    const showCountry = (show) => {        
        const country = countries.filter(country => country.name === show)[0];
        console.log(country);
        return (
            <Country country={country} />

        )
    };
    return (
        <div>
            {show}
            {(<ul>{showCountries()}</ul>)}
            {show  && showCountry(show)}
        </div>

    )
}

export default Countries