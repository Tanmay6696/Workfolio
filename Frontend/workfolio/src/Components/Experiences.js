import React from 'react'
import '../Componentcss/Experiencess.css'
const Experiences = () => {
  return (
    <div className='Experience'>
      <div className='ExperiencesHeader'>
        <h1>Experiences</h1></div>
      <div className='Experiencemain'>
        <div className='ExperiencesCompanyName'>
          <span>Company Name</span>
        </div>
        <div>
          <div className='ExperiencesTitle'>
            <span>Title</span>
          </div>
          <div className='Experiencesfromto'>
            <span>from to</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experiences

