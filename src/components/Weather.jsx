import React, { useState } from 'react';
import axios from 'axios';
import '../index.css'


const Weather = () => {
    
    const [temperature, setTemperature] = useState();
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("")
    const [humidity, setHumidity] = useState("");
    const [windSpeed, setWindSpeed] = useState("");
    const [maxTemp, setMaxTemp] = useState();
    const [minTemp, setMinTemp] = useState();
    const [feelsLike, setFeelsLike] = useState('');
    const [unit, setUnit] = useState('metric');

    async function getWeather (e) {
      e.preventDefault();
        const weatherResponse = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5205f0932d1a4687b37dafc175f2b053&units=${unit}`);

        if(weatherResponse.status !== 200) {
          console.log(`An error has occurred: ${weatherResponse.status}`)
        }
 
        setTemperature(weatherResponse.data.main.temp);
        setCity(weatherResponse.data.name);
        setCountry(weatherResponse.data.sys.country);
        setHumidity(weatherResponse.data.main.humidity);
        setWindSpeed(weatherResponse.data.wind.speed);
        setMaxTemp(weatherResponse.data.main.temp_max);
        setMinTemp(weatherResponse.data.main.temp_min);
        setFeelsLike(weatherResponse.data.main.feels_like);
    }

    return (

      <form onSubmit={getWeather}>
        <div>
            <div className='text-xl font-extrabold underline'>{city}, {country}</div>
            <div>{temperature}</div>
            <div>{humidity}</div>
            <div>{windSpeed}</div>
            <div>{maxTemp}</div>
            <div>{minTemp}</div>
            <div>{feelsLike}</div>
        </div>
        <div>
          <label>
            <input 
              type='radio'
              name='units'
              value='metric'
              checked={unit === 'metric'}
              onChange={(e) => setUnit(e.target.value)}
              />
              Celsius
          </label>
          <label>
          <input 
              type='radio'
              name='units'
              value='imperial'
              checked={unit === 'imperial'}
              onChange={(e) => setUnit(e.target.value)}
              />
              Fahrenheit
          </label>
        
        </div>
        <div className="flex">
          <input 
          type="text" 
          placeholder="Enter City"
          value={city} />
          <button type='submit'>Submit Now!</button>
        </div>

      </form>
        
    )
}

export default Weather
