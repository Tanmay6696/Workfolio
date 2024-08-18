import React from 'react'
import '../Componentcss/Button.css';
const Buttons = ({buttonname,classname ,onClick}) => {
  return (
    <>
        <button type="button" className={`btn ${classname}`} onClick={onClick}>{buttonname}</button>
    </>
  )
}

export default Buttons