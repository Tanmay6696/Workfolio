import React from 'react'

import { FaRegUserCircle } from "react-icons/fa";

import '../Componentcss/Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='Navbar'>
        <h1 style={{ margin: '20px 0 0 25px' }}>WorkFolio</h1>

        <input/>
        <Link to="/userprofile">
        <FaRegUserCircle style={{ height:'50px',width:'50px'}} /></Link>
        
        
    </div>
  )
}

export default Navbar