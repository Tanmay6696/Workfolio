import React, { useState ,useEffect} from 'react';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa'; // Import icons from react-icons
import '../Componentcss/Experiencess.css';
import Buttons from './Buttons.js';

import '../Allcomponentfile.css'
import Header from './Header.js'
import EditExperienceModel from './ExperiencesModels.js';
const Experiences = ({user}) => {
  
  let User=user.experiences;
  const options={year:'numeric',month:'long',day:'numeric'};
  const [editindex,seteditindex]=useState(0);
  const [showeditmodel,setshoweditmodel]=useState(0);
  const editTheExperience=(index)=>{
    // alert("hiiiiiiiii alert");
    seteditindex(index);
    // alert(editindex);
    setshoweditmodel(1);
    // alert(showeditmodel);
  }

  return (
    <>
    <div className='interactive-card'>
      
      <div className='experience-content'>
    {User!=undefined ?
    User.map((experience,index)=>(       
      
        <div className='experience-item' key={index}>
          <div className='experience-company'>
            <FaBriefcase className='icon' />
            <span>{experience.companyName?experience.companyName:"Cognizant"}</span>
          </div>
          <Buttons buttonname="Edit" onClick={()=>{editTheExperience(index);}}/>
          <div className='experience-details'>
            <div className='experience-title'>
              <span>{experience.role?experience.role:"Programmer Anlayst"}</span>
            </div>
            <div className='experience-duration'>
              <FaCalendarAlt className='icon' />
              <span>{experience.DurationFrom?new Date(experience.DurationFrom).toLocaleDateString(undefined,options) :"2018"} - {experience.DurationTo?new Date(experience.DurationTo).toLocaleDateString(undefined,options) :"current"}</span>
            </div>
          </div>          
        </div>
      
    )):<></>}
    </div>
    </div>
    {showeditmodel?<EditExperienceModel index={editindex}/>:<></>}
    </>
  );
};

export default Experiences;
