import React, { useEffect, useState } from 'react'
import '../Componentcss/Profile.css';
import UserInfo from './UserInfo';
import Resume from './Resume';
import Skills from './Skills';
import SkillsItem from './SkillsItem';
import Education from './Education';
import Experiences from './Experiences';
import Achievements from './Achievements';
import Projects from './Projects';
import SocialMediaprofile from './SocialMediaprofile';
import Ratings from './Ratings';
import CodingProfiles from './CodingProfiles';
import Header from './Header';
import axios from 'axios';

import Awards from './Awards';

const Profilesection = ({user}) => {
  // console.log("user ",user);
  const Like = () => {
    console.log("Liked");
    const heartIcon = document.querySelector('.ri-heart-fill');

    heartIcon.style.transform = 'translate(-50%, -50%) scale(0)';
    heartIcon.style.opacity = 0.8;

    const reflow = heartIcon.offsetHeight;
    console.log(heartIcon.style.transform);
    heartIcon.style.transform = 'translate(-50%, -50%) scale(2)';
    setTimeout(() => {
      alert("Liked");
      heartIcon.style.transform = 'translate(-50%, -50%) scale(0)';
      heartIcon.style.opacity = 0;
      console.log(heartIcon.style.transform);
    }, 3000);
  };
  return (
    <div className='Profilesection'> 
        <div onDoubleClick={Like}>
          
          <UserInfo user={user}/>
          <Header name="Resume" />
          <Resume user={user}/>
          <Header name="Skills" />
          <Skills user={user}/>
          <Header name="Education" />
          <Education user={user}/>
          <Header name="Experiences" />
          <Experiences user={user}/>
          <Header name="Achievements" />
          <Achievements user={user}/>
          <Header name="Projects" />
          <Projects user={user}/>
          <Header name="Ratings" />
          <Ratings user={user}/>
          <Header name="Awards" />
          <Awards user={user}/>
          <Header name="CodingProfiles" />
          <div className='interactive-card'>
            <CodingProfiles user={user}/>
          </div>
          <Header name="SocialMediaprofile" />
          <SocialMediaprofile user={user}/>
        </div>
        <i class="ri-heart-fill"></i>
    </div>

    
  )
}

export default Profilesection