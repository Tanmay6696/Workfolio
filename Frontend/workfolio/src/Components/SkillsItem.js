import React from 'react'
import '../Componentcss/SkillsItems.css';
import image from '../imgstore/checkmark.png';
const SkillsItem = ({skill}) => {
  // console.log("skill",skill);
  
  return (
    <>
        <div className='SkillsItemdiv2'>
            <img src={image} alt="Experience icon" class="icon" style={{height:'2rem'}}/>
            <div style={{color:'black'}}>
              <h3>{skill.SkillName}</h3>
              <p>{skill.proficiency}</p>
            </div>
        </div>
        
    </>
  )
}

export default SkillsItem