import React from 'react'
import '../Componentcss/SkillsItems.css';
import image from '../imgstore/checkmark.png';
const SkillsItem = () => {
  return (
    <>
        <div className='SkillsItemdiv2'>
            <img src={image} alt="Experience icon" class="icon" style={{height:'2rem'}}/>
            <div style={{color:'black'}}>
              <h3>HTML</h3>
              <p>Experienced</p>
            </div>
        </div>
        
    </>
  )
}

export default SkillsItem