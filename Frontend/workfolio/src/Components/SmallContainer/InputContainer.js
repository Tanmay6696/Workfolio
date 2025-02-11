import React from 'react'
import './InputContainer.css';
const InputContainer = ({ label, type = "text", name, value, onChange }) => {
    return (
        <div className='InputBox'>
            <label>{label}:</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default InputContainer