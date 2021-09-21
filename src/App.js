import React, {useState} from 'react';
import axios from 'axios';

import './App.css';
import Form from "./components/Form.jsx";
import WeatherDetails from "./components/WeatherDetails.jsx";

function App() {

  const[weather, setWeather] = useState({
    city: null,
    country: null,
    description: null,
    humidity: null,
    temperature: null,
    temp_max: null,
    temp_min: null,
    clouds: null,
    geo_lon: null,
    geo_lat: null,
    wind: null,
    errorMessage: ''
    })

  const API_Key = 'aa4a0b411be7a695a51c5406d3ef0948';

  const getWeatherInfo = (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`)
    .then((res) => {
      console.log(res);
      setWeather({
          city: res.data.name,
          country: res.data.sys.country,       
          description: res.data.weather[0].description,
          humidity: res.data.main.humidity,
          temperature: res.data.main.temp,
          temp_max: res.data.main.temp_max,
          temp_min: res.data.main.temp_min,
          clouds: res.data.clouds.all,
          geo_lon: res.data.coord.lon,
          geo_lat: res.data.coord.lat,
          wind: res.data.wind.speed

      })
      e.target.reset();
    //   .catch((err) => {
    //     console.log(err.message);
    //     console.log('not found')
    //     setWeather({
    //       errorMessage: err.message
    //     })
    //  })
    })
  }
   
  return (
    <div className="container">
        <div className="nav">
        <h1 className="header">Weather Today</h1>    
            <Form onSubmit={getWeatherInfo}/>       
        </div> 
        
        {/* {weather.errorMessage && 
        <h3 className="error">Not found. Try another city
        </h3>} */}
    
      {weather.city === null ? null :
        <WeatherDetails
          location=  {weather.city +  ',' + ' ' + weather.country}
          description= {weather.description}
          humidity= {weather.humidity}
          temp_max = {weather.temp_max}
          temp_min = {weather.temp_min}
          temperature= {weather.temperature}
          geo={weather.geo_lon + ' - ' + weather.geo_lat}
          wind={weather.wind}        
        />      
      }      
    </div>  
  );
}

export default App;
