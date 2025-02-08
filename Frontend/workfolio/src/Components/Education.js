import React, { useState ,useEffect} from 'react';
import Buttons from './Buttons.js';

import '../Componentcss/Educations.css'
import { FaSchool } from "react-icons/fa";
import Header from './Header.js'
import '../Allcomponentfile.css'
import Editeducationmodel from './EducationModels.js';
import { SiShowwcase } from 'react-icons/si';

import { useDispatch, useSelector } from 'react-redux';

const Education = ({user}) => {
    let userdata=useSelector((state)=>state.userdata.userdata);
  
  const searchresultshownornot=useSelector(
    (state)=>state.userdata.searchclickuserdata);
  let User=user.educations;
  const options={year:'numeric',month:'long',day:'numeric'};
  const [editindex,seteditindex]=useState(0);
  const [showeditmodel,setshoweditmodel]=useState(0);
  const edittheeducation=(index)=>{
    // alert("hiiiiiiiii alert");
    seteditindex(index);
    // alert(editindex);
    setshoweditmodel(1);
    // alert(showeditmodel);
  }
  return (
    <>
    
      <div className='interactive-card'>
        <div className='Education-content'>
        {User!=undefined?
        User.map((education,index)=>( 
          <div className='EducationDetails' key={index}>
           {userdata && userdata?.username!=User.username &&   <Buttons buttonname="Edit" onClick={()=>{edittheeducation(index);}}/>}
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
      {showeditmodel?<Editeducationmodel index={editindex}/>:<></>}
    </>
  )
}

export default Education