import React from 'react'

const Inputs = ({name,type}) => {
  return (
    <div className="input-field">
    <input type={type} 
      required name="username" id="username"
      placeholder={name} />
    <div className="underline"></div>
  </div>
  )
}

export default Inputs