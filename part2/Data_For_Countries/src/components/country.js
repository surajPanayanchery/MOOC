import React from 'react';
import Weather from './weather';

export const Country = ({ country }) => {

    const getLanguages = (country) => country.languages.map(language => { return <li>{language.name}</li> });

    return (
        <div>
            <h1> {country.name} </h1>
            <p>
                <span>capital : {country.capital}</span>
                <br></br>
                <span>population: {country.population}</span>
            </p>
            <div>
                <b>languages</b>
                <ul>
                    {getLanguages(country)}
                </ul>
            </div>

            <div>
                <img height="250" width="300" alt="supposed to have country flag" src={country.flag}></img>
            </div>

            <Weather name={country.name} />
        </div>
    );
}

export default Country;