import React from 'react'
import '../Componentcss/Profile.css';
import UserInfo from './UserInfo';
import Resume from './Resume';
import Skills from './Skills';
import Education from './Education';
import Experiences from './Experiences';
import Achievements from './Achievements';
import Projects from './Projects';
import SocialMediaprofile from './SocialMediaprofile';
import Ratings from './Ratings';
import CodingProfiles from './CodingProfiles';
import Awards from './Awards';
const Profilesection = () => {
  return (
    <div className='Profilesection'>
        <UserInfo/>
        <Resume/>
        <Skills/>
        <Education/>
        <Experiences/>
        <Achievements/>
        <Projects/>
        <SocialMediaprofile/>
        <Ratings/>
        <CodingProfiles/>
        <Awards/>
        
        
    </div>
  )
}

export default Profilesection