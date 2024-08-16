import React from 'react'

import { FaRegUserCircle } from "react-icons/fa";

import '../Componentcss/Navbar.css';
const Navbar = () => {
  return (
    <div className='Navbar'>
        <h1>Workolio</h1>
        <input/>
        <FaRegUserCircle style={{ height:'50px',width:'50px'}}/>
        
        
    </div>
  )
}

export default Navbar