import React from 'react'
import '../assets/Form.css';

export default function Form({onSubmit}) {
  
    return (
            <form className="example" onSubmit={onSubmit}>                      
                <input  type="text" name="city" placeholder="City" />
                <button>Get weather</button>
            </form>
        )
    }


