import React from 'react'
import '../Componentcss/Button.css';
const Buttons = ({buttonname,classname}) => {
  return (
    <>
        <button type="button" className={`btn ${classname}`}>{buttonname}</button>
    </>
  )
}

export default Buttons