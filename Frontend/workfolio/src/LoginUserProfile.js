import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { setUserdata } from './Store/UserDataSlice.js';
import { useSelector, useDispatch } from 'react-redux'

import Buttons from './Components/Buttons';

const LoginUserProfile = () => {
  const dispatch = useDispatch();
  //const [userdata, setUsersdata] = useState(null); // Initialize as null to handle loading state
  const [isEmailEditable,setisEmailEditable]=useState(false);
  const [newemail,setemail]=useState('tanmay1@gmail.com');
  console.log("initialState", useSelector(state => state.userdata));

  const { userdata } = useSelector(state => state.userdata);
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJlM2M2N2ZkZi0xYWYxLTQ0ZWUtYTU2OS1iMGI5MDg3NzNkYmEiLCJlbWFpbCI6ImpvaG5kb2VAZXhhbXBsZS5jb20iLCJ1c2VybmFtZSI6ImpvaG5kb2UiLCJmdWxsTmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNzI0MjY3NDQ1LCJleHAiOjE3MjQzNTM4NDV9.eO8ttfGlDFQ_pZtsyutmqqTP4vDHfAVukJE9MelDLnA"; // Replace this with your actual token

  // Function to fetch user data
  const getdata = async () => {
    try {

      const response = await axios.post('http://localhost:3000/api/v1/johndoe@example.com/Userdetails', {}, {
        headers: {
          'Authorization': `${token}` // Ensure you include 'Bearer' if needed
        }
      });
      console.log("good", response.data);
      // Set the fetched data to the state
      dispatch(setUserdata(response.data));

    } catch (e) {
      console.log("Error fetching user data:", e);
    }
  };
  const HandleEditemail = () => {
    setisEmailEditable((prev)=> !prev);
    console.log("hi from the email edit");
    alert("Great Shot!");
    document.getElementsByClassName("inputforemail").disabled = false;
    // dispatch(setUserdata({
    //   ...userdata, email: newemail
    // }));
    document.getElementsByClassName("inputforemail").disabled = true;
  }
  const HandleSaveemail = () => {
   
    
    dispatch(setUserdata({...userdata,email:newemail}));
    setisEmailEditable((prev)=> !prev);
  }

  // Fetch data on component mount
  useEffect(() => {
    getdata();
  }, []); // Empty dependency array ensures it runs only on mount

  // Render loading state or user data
  if (!userdata) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>{userdata.fullName}</h1><Buttons buttonname="Edit" />
      <p>
        <strong>Email:</strong> 
        {userdata.email}
        <Buttons buttonname="Edit" onClick={HandleEditemail} />
        {isEmailEditable==true?<><input 
          className="inputforemail" 
          disabled={!isEmailEditable} // Control the disabled property based on state
          
          onChange={e => setemail( e.target.value )} // Update the email value
        /><Buttons 
        disabled={!isEmailEditable}
        buttonname="Save" onClick={HandleSaveemail}
      /></>:''}
        
        
      </p>
      <p><strong>Summary:</strong> {userdata.summary}</p><Buttons buttonname="Edit" />
      <img src={userdata.profilePicture} alt="Profile" style={{ width: '150px', borderRadius: '50%' }} /><Buttons buttonname="Edit" />

      <div>
        <h2>Skills</h2>
        <ul>
          {userdata.skills && userdata.skills.length > 0 ? (
            userdata.skills.map((skill) => (
              <li key={skill._id}>{skill.SkillName} - {skill.proficiency}</li>
            ))
          ) : (
            <p>No skills available</p>
          )}
        </ul>
      </div>

      <video controls width="50%" height="50%">
        <source src={userdata.introVideo} type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>

      <div>
        <h2>achievements</h2>
        <ul>
          {userdata.achievements && userdata.achievements.length > 0 ? (
            userdata.achievements.map((achievement) => (
              <li key={achievement._id}>{achievement.title} - {achievement.category}</li>
            ))
          ) : (
            <p>No skills available</p>
          )}
        </ul>
      </div>

      <div>
        <h2>Education</h2>
        <ul>
          {userdata.educations && userdata.educations.length > 0 ? (
            userdata.educations.map((education) => (
              <li key={education._id}>
                {education.instituteName} - {education.course} ({education.courseDuration})
              </li>
            ))
          ) : (
            <p>No education information available</p>
          )}
        </ul>
      </div>

      <div>
        <h2>Experience</h2>
        <ul>
          {userdata.experiences && userdata.experiences.length > 0 ? (
            userdata.experiences.map((experience) => (
              <li key={experience._id}>
                {experience.companyName} - {experience.role} ({new Date(experience.DurationFrom).toLocaleDateString()} to {new Date(experience.DurationTo).toLocaleDateString()})
              </li>
            ))
          ) : (
            <p>No experiences available</p>
          )}
        </ul>
      </div>

      <div>
        <h2>Projects</h2>
        <ul>
          {userdata.projects && userdata.projects.length > 0 ? (
            userdata.projects.map((project) => (
              <li key={project._id}>
                <strong>{project.title}</strong>: {project.description}
                <br />
                <a href={project.url} target="_blank" rel="noopener noreferrer">Project Link</a>
              </li>
            ))
          ) : (
            <p>No projects available</p>
          )}
        </ul>
      </div>

      <div>
        <h2>Awards</h2>
        <ul>
          {userdata.awards && userdata.awards.length > 0 ? (
            userdata.awards.map((award) => (
              <li key={award._id}>
                {award.awardName} - {award.issuingOrganization} ({new Date(award.issueDate).toLocaleDateString()})
              </li>
            ))
          ) : (
            <p>No awards available</p>
          )}
        </ul>
      </div>

      <div>
        <h2>Ratings</h2>
        <ul>
          {userdata.ratings && userdata.ratings.length > 0 ? (
            userdata.ratings.map((rating) => (
              <li key={rating._id}>Score: {rating.score}</li>
            ))
          ) : (
            <p>No ratings available</p>
          )}
        </ul>
      </div>

      <div>
        <h2>Comments</h2>
        <ul>
          {userdata.comments && userdata.comments.length > 0 ? (
            userdata.comments.map((comment) => (
              <li key={comment._id}>{comment.content}</li>
            ))
          ) : (
            <p>No comments available</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default LoginUserProfile;
