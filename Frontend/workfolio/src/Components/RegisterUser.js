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
  function valid(email) {
    console.log("email",email);
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log("pattern.test(email)",pattern.test(email));
    
    return pattern.test(email);
  }
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
  const [errors,setErrors]=useState({})
  const [activeTab,setActiveTab]=useState(0);
  const Tabs=[
    {
      name:"signup",
      componenet:SignUpcomponent,
      Validation:()=>{
        console.log("enter in validation",formData.fullName,valid(formData.email));
        
        const err={};
        if(!formData.username) err.username="username is empty";
        if(!formData.fullName) err.fullName="fullName is empty";
        if((!formData.email)||formData.email && !valid(formData.email)) err.email="Email is not correct";
        if(!formData.password) err.password="Password is empty";
        if(!formData.summary) err.summary="Summary is empty";
        console.log(Object.keys(err).length);
        
        setErrors(err);
        console.log("errors",errors);
        
        return Object.keys(err).length===0;
      }
    },
    {
      name:"Experiences",
      componenet:Experiencescomponent,
      Validation: () => {
        const err = {};
        formData.experiences.forEach((exp, index) => {
          if (!exp.companyName) err[`experience_${index}_companyName`] = "Company Name is required";
          if (!exp.role) err[`experience_${index}_role`] = "Role is required";
          if (!exp.DurationFrom) err[`experience_${index}_DurationFrom`] = "Start Date is required";
          if (!exp.DurationTo) err[`experience_${index}_DurationTo`] = "End Date is required";
        });
        console.log("Validation",Object.keys(err).length);
        
        setErrors(err);
        return Object.keys(err).length === 0;
      },
    },
    {
      name:"Achievements",
      componenet:Achievementscomponent,
      Validation: () => {
        const err = {};
        formData.achievements.forEach((ach, index) => {
          if (!ach.title) err[`achievement_${index}_title`] = "Title is required";
          if (!ach.description) err[`achievement_${index}_description`] = "Description is required";
        });
  
        setErrors(err);
        return Object.keys(err).length === 0;
      },
    },
    {
      name:"Awards",
      componenet:Awardscomponent,
      Validation: () => {
        const err = {};
        formData.Awards.forEach((award, index) => {
          if (!award.awardName) err[`award_${index}_awardName`] = "Award Name is required";
          if (!award.issuingOrganization) err[`award_${index}_issuingOrganization`] = "Issuing Organization is required";
        });
  
        setErrors(err);
        return Object.keys(err).length === 0;
      },
    },
    {
      name:"Coding Profiles",
      componenet:CodingProfilecomponent,
      Validation: () => {
        const err = {};
        formData.codingProfiles.forEach((profile, index) => {
          if (!profile.profileName) err[`codingProfile_${index}_profileName`] = "Profile Name is required";
          if (!profile.profileUrl) err[`codingProfile_${index}_profileUrl`] = "Profile URL is required";
        });
  
        setErrors(err);
        return Object.keys(err).length === 0;
      },
    },
    {
      name:"Education",
      componenet:Educationcomponent,
      Validation: () => {
        const err = {};
        formData.educations.forEach((edu, index) => {
          if (!edu.instituteName) err[`education_${index}_instituteName`] = "Institute Name is required";
          if (!edu.course) err[`education_${index}_course`] = "Course is required";
        });
  
        setErrors(err);
        return Object.keys(err).length === 0;
      },
    },
    {
      name:"Skills",
      componenet:Skillscomponent,
      Validation: () => {
        const err = {};
        formData.skills.forEach((skill, index) => {
          if (!skill.skillName) err[`skill_${index}_skillName`] = "Skill Name is required";
        });
  
        setErrors(err);
        return Object.keys(err).length === 0;
      },
    },
    {
      name:"Social Media Profiles",
      componenet:SocialMediaProfilescomponent,
      Validation: () => {
        const err = {};
        formData.socialMedia.forEach((profile, index) => {
          if (!profile.profileName) err[`socialMedia_${index}_profileName`] = "Profile Name is required";
          if (!profile.profileUrl) err[`socialMedia_${index}_profileUrl`] = "Profile URL is required";
        });
  
        setErrors(err);
        return Object.keys(err).length === 0;
      },
    },
    {
      name:"Projects",
      componenet:Projectscomponent,
      Validation: () => {
        const err = {};
        formData.projects.forEach((project, index) => {
          if (!project.title) err[`project_${index}_title`] = "Project Title is required";
          if (!project.description) err[`project_${index}_description`] = "Project Description is required";
        });
  
        setErrors(err);
        return Object.keys(err).length === 0;
      },
    }


  ]
  
  const [password,setPassword] = useState('');

  


 

  

  

  
 

  



 

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data: ", formData);
    console.log("ActiveTab: ", activeTab);
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
  const Go_to_the_Next_Tab=(e,index)=>{

    console.log("Hi",activeTab);
    setActiveTab(index);
  }
  const NextTabHandler=(e)=>{
    
    e.preventDefault();
    if(Tabs[activeTab].Validation()){
      setActiveTab(prev=>prev+1);
    }
    console.log("errors",errors)

  }  
  const PrevTabHandler=(e)=>{
    e.preventDefault();
    setActiveTab(prev=>prev-1);
  }
  console.log("His",activeTab);
  const ActiveDataComponet=Tabs[activeTab].componenet;
  return (
    <form onSubmit={handleSubmit}>
      {/* Other user details fields */}
      <div className='tabHeadingContainer'>
      {Tabs.map((val,index)=>(
        <div className="tabHeading" key={index} onClick={(e)=>Go_to_the_Next_Tab(e,index)} >
          {val.name}
          </div>
      ))}
      </div>
      
      <div className='containerdata'>
        <ActiveDataComponet formData={formData} setFormData={setFormData} errors={errors} /></div>
        {Object.keys(errors).length > 0 && Object.values(errors).map((error, index) => (
        <p key={index} style={{ color: "red" }}>{error}</p>
      )) }
        {(activeTab>=0 &&activeTab<Tabs.length-1) ?<button onClick={(e)=>NextTabHandler(e)}>next</button>:''}
        {(activeTab<Tabs.length-1 && activeTab>0)?<button onClick={(e)=>PrevTabHandler(e)}>prev</button>:""}
        {activeTab===Tabs.length-1?<button type="submit">Submit</button>:''}
        
      

      
      

    </form>
  );
};

export default UserForm;