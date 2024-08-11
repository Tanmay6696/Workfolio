import React from 'react'
import logo from '../logo.svg';
import '../Componentcss/Navbar.css';
const Navbar = () => {
  return (
    <div className='Navbar'>
        <h1>Workolio</h1>
        <input/>
        <img style={{ height:'50px',width:'50px'}} src={logo}/>
        
    </div>
  )
}

export default Navbar