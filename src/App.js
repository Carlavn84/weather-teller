import React, {useState} from 'react';
import axios from 'axios';

import './App.css';

import Form from "./components/Form.jsx";
import WeatherDetails from "./components/WeatherDetails.jsx";

function App() {

  const[weather, setWeather] = useState({
    weatherInfo: {
      city: null,
      country: null,
      description: null,
      humidity: null,
      temperature: null
    }
  })

  const API_Key = 'aa4a0b411be7a695a51c5406d3ef0948';

  const getWeatherInfo = (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
 
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`)
    .then((res) => {
      setWeather({
        weatherInfo: {
          city: res.data.name,
          description: res.data.weather[0].description,
          humidity: res.data.main.humidity,
          temperature: res.data.main.temp
        }
      })
    })
  }
   
  return (
    <div>
      <h1>Let's check the weather today</h1>
      <Form onSubmit={getWeatherInfo}/>
       
      <WeatherDetails
        city = {weather.weatherInfo.city}
        description = {weather.weatherInfo.description}
        humidity = {weather.weatherInfo.humidity}
        temperature = {weather.weatherInfo.temperature}
      />      
      
       
    </div>
  );
}

export default App;
