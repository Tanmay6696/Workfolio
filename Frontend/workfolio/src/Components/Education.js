import React from 'react'
import '../Componentcss/Educations.css'
import { FaSchool } from "react-icons/fa";
import Header from './Header.js'
import '../Allcomponentfile.css'


const Education = ({Education,CourseDetails,courseDuration,CourseDetailsspecialization}) => {
  return (
    <>
    
      <div className='interactive-card'>
        <div className='Education-content'>
          <div className='EducationDetails'>
            <div className='clgname'>
              <FaSchool className='icon'/>
              <span>{Education?Education:"College Name"}</span>
            </div>
            <div className='Coursedetails'>
              <div className='CourseName'>
                <span>{CourseDetails?CourseDetails:"BE"}</span>
              </div>
              <div className='CourseSpecializationname'>
                <span> {CourseDetailsspecialization?CourseDetailsspecialization:"Electrical, Electronics and Communications Engineering"}</span>
                <span> {courseDuration?courseDuration:"2018 -2022"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
   
    </>
  )
}

export default Education