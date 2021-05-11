import React from 'react'

export default function WeatherDetails ({clouds, location, description, geo, humidity, temperature, temp_max, temp_min, wind}) {
   
        return (
            <div>
   
                <p className="location">{location} <span className="description"><em>{description}</em></span></p>
                <p className="temp">{temperature}&deg;C</p>
                <p>temperature from {temp_min} to {temp_max}&deg;C, wind {wind}m/s, clouds {clouds}%</p>
               
                <p>Geo coords: <a href="https://www.latlong.net/Show-Latitude-Longitude.html">[{geo}]</a> </p>
            </div>
        )
    }

