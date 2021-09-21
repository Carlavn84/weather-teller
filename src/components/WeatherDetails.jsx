import React from 'react'
import '../assets/WeatherDetails.css'

export default function WeatherDetails (props) {
   
    return (
        <div className="details">   
            <h1 className="location">{props.location} </h1>
            <h2>{props.description} - {props.temperature}&deg;C </h2>               
            <p>Temperature from {props.temp_min} to {props.temp_max}&deg;C, wind {props.wind}m/s, clouds {props.clouds}%</p>               
            <p>Geo coords: <a href="https://www.latlong.net/Show-Latitude-Longitude.html">[{props.geo}]</a> </p>
        </div>
    )
}

