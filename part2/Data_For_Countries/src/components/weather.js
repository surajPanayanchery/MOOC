
import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const Weather = ({ name }) => {

    const base_key = '160d3f79733eaff248455cb860dff37e';

    const [weather, setWeather] = useState({ location: { name: '' }, current: { weather_icons: [], temperature: '', wind_speed: '', wind_dir: '' } });

    const hook = () => {
        const promise = axios.get(`http://api.weatherstack.com/current?access_key=${base_key}&query=${name}`);
        promise.then((response) => {
            console.log(response.data);
            setWeather(response.data);
        })
    }

    useEffect(hook, [])

    return (    
        <div>
            <h1>Weather in {weather.location.name}<br></br></h1>
            <br></br>
            <b>temparature : {weather.current.temperature}</b><br></br>
            <div><img alt="weather_icon" src={weather.current.weather_icons[0]}></img></div>
            wind : {weather.current.wind_speed} kph in direction {weather.current.wind_dir}
        </div>
    )
}

export default Weather;