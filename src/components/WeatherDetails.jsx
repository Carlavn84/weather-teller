import React from 'react'

export default function WeatherDetails ({city,description, humidity, temperature}) {
   
        return (
            <div>
            {/* Here is your weather's details:  */}
                <p>Location: {city}</p>
                <p>Temperature: {temperature}</p>
                <p>Humidity: {humidity}</p>
                <p>Condition: {description}</p>
            </div>
        )
    }

