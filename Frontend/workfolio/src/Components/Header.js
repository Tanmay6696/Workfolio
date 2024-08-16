import React from 'react'
import '../Componentcss/Headers.css';
const Header = (props) => {
    // console.log("props123 " ,props.name);
    
  return (
    <div className='header-card'>
        <h1>{props.name}</h1>
    </div>
  )
}

export default Header