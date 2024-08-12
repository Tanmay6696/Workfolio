import React from 'react'
import '../Componentcss/Educations.css'
import { FaSchool } from "react-icons/fa";
import Header from './Header.js'

const Education = () => {
  return (
    <>
    <div className='Education'>
      <Header name="Education" />
      <div className='Education-card'>
        <div className='Education-content'>
          <div className='EducationDetails'>
            <div className='clgname'>
              <FaSchool className='icon'/>
              <span>College Name</span>
            </div>
            <div className='Coursedetails'>
              <div className='CourseName'>
                <span> Bachelor of Engineering - BE </span>
              </div>
              <div className='CourseSpecializationname'>
                <span> Electrical, Electronics and Communications Engineering</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Education