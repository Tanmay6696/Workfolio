import React from 'react'
import '../Componentcss/Educations.css'
import { FaSchool } from "react-icons/fa";
import Header from './Header.js'
import '../Allcomponentfile.css'


const Education = ({user}) => {
  let User=user.educations;
  const options={year:'numeric',month:'long',day:'numeric'};

  return (
    <>
    
      <div className='interactive-card'>
        <div className='Education-content'>
        {User!=undefined?
        User.map((education,index)=>( 
          <div className='EducationDetails' key={index}>
            <div className='clgname'>
              <FaSchool className='icon'/>
              <span>{education.instituteName?education.instituteName:"College Name"}</span>
            </div>
            <div className='Coursedetails'>
              <div className='CourseName'>
                <span>{education.CourseDetails?education.CourseDetails:"BE"}</span>
              </div>
              <div className='CourseSpecializationname'>
                <span> {education.specialization?education.specialization:"Electrical, Electronics and Communications Engineering"}</span>
                <span> {education.courseDuration?new Date(education.courseDuration).toLocaleDateString(undefined,options):"2018 -2022"}</span>
              </div>
            </div>
          </div>
          )):<></>}
        </div>
      </div>
   
    </>
  )
}

export default Education