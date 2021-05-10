import React from 'react'

export default function Form({onSubmit}) {
  
    return (
            <form onSubmit={onSubmit}>                      
                <input type="text" name="city" placeholder="City" />
                <button className="btn">Get weather</button>
            </form>
        )
    }


