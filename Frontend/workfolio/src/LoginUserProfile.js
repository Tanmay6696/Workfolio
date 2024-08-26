import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { setUserdata } from './Store/UserDataSlice.js';
import { useSelector, useDispatch } from 'react-redux'
import UserInfo from './Components/UserInfo.js';
import Buttons from './Components/Buttons';
import Experiences from './Components/Experiences.js';
import Header from './Components/Header.js';
import Education from './Components/Education.js';
import Projects from './Components/Projects.js';
import Awards from './Components/Awards.js';
const LoginUserProfile = () => {
  const dispatch = useDispatch();
  //const [userdata, setUsersdata] = useState(null); // Initialize as null to handle loading state
  const [isEmailEditable,setisEmailEditable]=useState(false);
  const [newemail,setemail]=useState('tanmay1@gmail.com');
  console.log("initialState", useSelector(state => state.userdata));

  const { userdata } = useSelector(state => state.userdata);
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI5MTcwNmMxNC02NWI5LTQ0ZDYtOThjYy04ZWYyZWVlOTRjOTYiLCJlbWFpbCI6ImphbmVkb2VAZXhhbXBsZS5jb20iLCJ1c2VybmFtZSI6ImphbmVkb2UiLCJmdWxsTmFtZSI6IkphbmUgRG9lIiwiaWF0IjoxNzI0Njg5NTkxLCJleHAiOjE3MjQ3NzU5OTF9.IOnBkuRv53HJQSmTcBxJfaMkjlCB8BAGN-KN6J40zhc"; // Replace this with your actual token

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
      
      <UserInfo 
        name={userdata.fullName} 
        position={userdata.fullName}
        summary={userdata.summary}
        photo={userdata.profilePicture}
        email={userdata.email}
      
      />
      <p>
        <strong>Email:</strong> 
        {userdata.email}
        <Buttons buttonname="Edit" onClick={HandleEditemail} />
        {isEmailEditable===true?<><input 
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
      <Header name="Education"/>
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
      <Header name="Education"/>
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
      <Header name="Education"/>

        <ul>
          {userdata.educations && userdata.educations.length > 0 ? (
            userdata.educations.map((education) => (
              <Education
              Education={education.instituteName}
              CourseDetails={education.course}
              Duration={education.courseDuration}

              />
              
            ))
          ) : (
            <p>No education information available</p>
          )}
        </ul>
      </div>
      <div>
        <Header name="Experiences"/>
        <ul>
          {userdata.experiences && userdata.experiences.length > 0 ? (
            userdata.experiences.map((experience) => (
              
              
                <Experiences
                  CompanyName={experience.companyName}
                  CompanyRole={experience.role}
                  fromDate={experience.DurationFrom}
                  Todate={experience.DurationTo}
                 />
                
              
            ))
          ) : (
            <p>No experiences available</p>
          )}
        </ul>
      </div>

      <div>
      <Header name="Projects"/>
        <ul>
          {userdata.projects && userdata.projects.length > 0 ? (
            userdata.projects.map((project) => (
              
                <Projects 
                  projectTitle={project.title}
                  projectDescription={project.description}
                  projectFrom={project.durationFrom}
                  projectTo={project.durationTo}
                  projecturl={project.url}
                  />
                
             
            ))
          ) : (
            <p>No projects available</p>
          )}
        </ul>
      </div>

      <div>
      <Header name="Awards"/>
        <ul>
          {userdata.awards && userdata.awards.length > 0 ? (
            userdata.awards.map((award) => (
              
              <Awards 
                awardName={award.awardName}
                issuingOrganization={award.issuingOrganization}
                issueDate={new Date(award.issueDate).toLocaleDateString()}
                awardDescription={award.issuingOrganization}
                />
                
             
            ))
          ) : (
            <p>No awards available</p>
          )}
        </ul>
      </div>

      <div>
      <Header name="Ratings"/>
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
      <Header name="Comments"/>
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
