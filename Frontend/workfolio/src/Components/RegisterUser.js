import React, { useState } from 'react';
import axios from 'axios';
import Constant from '../Constant';
import '../Componentcss/Registeruser.css';
import Achievementscomponent from './RegisterUserComponent/Achievementscomponent.js';
import Awardscomponent from './RegisterUserComponent/Awardscomponent.js';
import CodingProfilecomponent from './RegisterUserComponent/CodingProfilecomponent.js';
import Educationcomponent from './RegisterUserComponent/Educationcomponent.js';
import Experiencescomponent from './RegisterUserComponent/Experiencecomponent.js';
import Projectscomponent from './RegisterUserComponent/Projectscomponent.js';
import Skillscomponent from './RegisterUserComponent/Skillscomponent.js';
import SocialMediaProfilescomponent from './RegisterUserComponent/SocialMediaProfilecomponent.js';
import SignUpcomponent from './RegisterUserComponent/SignUpcomponent.js';

const UserForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    fullName: "",
    email: "",
    summary: "",
    password: "",
    profilePicture: "",
    introVideo: "",
    resume: "",
    experiences: [
      {
        companyName: "",
        role: "",
        description: "",
        DurationFrom: "",
        DurationTo: "",
      }
    ],
    achievements: [
      {
        description: "",
        title: "",
        date_awarded: "",
        category: "",
        issuer: "",
        certificate_url: "",
        level: "",
        public_visibility: false,
        tags: []
      }
    ],
    Awards: [
      {
        awardName: "",
        issuingOrganization: "",
        issueDate: "",
        description: ""
      }
    ],
    codingProfiles: [
      {
        profileName: "",
        profileUrl: ""
      }
    ],
    educations: [
      {
        instituteName: "",
        education: "",
        course: "",
        specialization: "",
        courseDuration: "",
        gradingSystem: ""
      }
    ],
    skills: [
      {
        skillName: "",
        proficiency: ""
      }
    ],
    socialMedia: [
      {
        profileName: "",
        profileUrl: ""
      }
    ],
    projects: [
      {
        title: "",
        description: "",
        url: "",
        durationFrom: "",
        durationTo: ""
      }
    ],
    feed: ""
  });
  
  const [activeTab,setActiveTab]=useState(0);
  const Tabs=[
    {
      name:"signup",
      componenet:SignUpcomponent
    },
    {
      name:"Experiences",
      componenet:Experiencescomponent
    },
    {
      name:"Achievements",
      componenet:Achievementscomponent
    },
    {
      name:"Awards",
      componenet:Awardscomponent
    },
    {
      name:"Coding Profiles",
      componenet:CodingProfilecomponent
    },
    {
      name:"Education",
      componenet:Educationcomponent
    },
    {
      name:"Skills",
      componenet:Skillscomponent
    },
    {
      name:"Social Media Profiles",
      componenet:SocialMediaProfilescomponent
    },
    {
      name:"Projects",
      componenet:Projectscomponent
    }


  ]
  
  const [password,setPassword] = useState('');

  


 

  

  

  
 

  



 

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data: ", formData);
    // Add your API call logic here to submit the form
    try {
      const response = await fetch(`${Constant}/api/v1/users/RegisterUser`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const result = await response.json();
        alert('User created successfully:', result);
        // Optionally, reset form data or navigate to another page.
      } else {
        alert('Error creating user:', response.statusText);
      }
    } catch (error) {
      alert('Error:', error);
    }
  };
  const ActiveDataComponet=Tabs[activeTab].componenet;
  return (
    <form onSubmit={handleSubmit}>
      {/* Other user details fields */}
      <div className='tabHeadingContainer'>
      {Tabs.map((val,index)=>(
        <div className="tabHeading" key={index} onClick={()=>setActiveTab(index)} >
          {val.name}
          </div>
      ))}
      </div>
      <div className='containerdata'>
        <ActiveDataComponet formData={formData} setFormData={setFormData} /></div>
      

      
      {activeTab==8 && <button type="submit">Submit</button>}

    </form>
  );
};

export default UserForm;