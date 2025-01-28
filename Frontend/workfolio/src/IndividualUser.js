import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { setUserdata } from './Store/UserDataSlice.js';
import { useSelector, useDispatch } from 'react-redux'
import './Allcomponentfile.css';
import UserInfo from './Components/UserInfo.js';
import Buttons from './Components/Buttons';
import Experiences from './Components/Experiences.js';
import Header from './Components/Header.js';
import Education from './Components/Education.js';
import Projects from './Components/Projects.js';
import Awards from './Components/Awards.js';
import Achievements from './Components/Achievements.js';
import CodingProfiles from './Components/CodingProfiles.js';
import Ratings from './Components/Ratings.js';
import Resume from './Components/Resume.js';
import Skills from './Components/Skills.js';
import UserForm from './Components/RegisterUser.js';
import RegisterUser from './Components/RegisterUser.js';
import SocialMediaprofile from './Components/SocialMediaprofile.js';
import Editmodel from './Components/ProjectsModels.js';

import Editeducationmodel from './Components/EducationModels.js';
import Constant from "./Constant.js";
const IndividualUser = () => {
      const userdata=useSelector(
              (state)=>state.userdata.searchclickuserdata);
    
  return (
    <div><>
    <Editmodel />
    <UserInfo user={userdata} />
    <Header name="Resume" />
    <Resume user={userdata} />
    <Header name="Skills" />
    <Skills user={userdata} />
    <Header name="Education" />
    <Education user={userdata} />
    <Editeducationmodel />
    <Header name="Experiences" />
    <Experiences user={userdata} />
    <Header name="Achievements" />
    <Achievements user={userdata} />
    <Header name="Projects" />
    <Projects user={userdata} />
    <Header name="Ratings" />
    <Ratings user={userdata} />
    <Header name="Awards" />
    <Awards user={userdata} />
    <Header name="CodingProfiles" />
    <div className="interactive-card">
      <CodingProfiles user={userdata} />
    </div>
    <Header name="SocialMediaprofile" />
    <SocialMediaprofile user={userdata} />
  </></div>
  )
}

export default IndividualUser