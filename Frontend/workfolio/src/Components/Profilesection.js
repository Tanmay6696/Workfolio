import React from 'react'
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
import Awards from './Awards';
const Profilesection = () => {
  return (
    <div className='Profilesection'>
        <UserInfo/>
        <Header name="Resume"/>

        <Resume/>
        <Header name="Skills"/>

        <Skills/>
        <Header name="Education"/>
        <Education/>
        <Header name="Experiences"/>
        <Experiences/>
        <Header name="Achievements" />

        <Achievements/>
        <Header name="Projects" />
        <Projects/>
        <Header name="Ratings"/>

        <Ratings/>
        <Header name="Awards"/>

        <Awards/>
        <Header name="CodingProfiles"/>
        <div className='interactive-card'>
        <CodingProfiles/>

        </div>
        <Header name="SocialMediaprofile"/>

        <SocialMediaprofile/>
        
    </div>
  )
}

export default Profilesection