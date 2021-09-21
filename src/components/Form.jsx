import React from 'react'
import '../assets/Form.css';

export default function Form({onSubmit}) {
  
    return (
            <form className="search-box" onSubmit={onSubmit}  autocomplete="off">                      
                <input  type="text" name="city" placeholder="City" />           
            </form>
        )
    }


