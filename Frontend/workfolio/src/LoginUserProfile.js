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
import SocialMediaprofile from './Components/SocialMediaprofile.js';
import Editmodel from './Components/Models.js';
const LoginUserProfile = () => {
  const dispatch = useDispatch();
  //const [userdata, setUsersdata] = useState(null); // Initialize as null to handle loading state
  const [isEmailEditable,setisEmailEditable]=useState(false);
  const [newemail,setemail]=useState('tanmay1@gmail.com');
  console.log("initialState", useSelector((state) => state.userdata));

  const { userdata } = useSelector(state => state.userdata);
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YmI5MWI0Mi04Yjk4LTQwMWMtYmI3Mi1hMjRlM2Q1ZGExMTciLCJlbWFpbCI6InRhbm1heTExN0BleGFtcGxlLmNvbSIsInVzZXJuYW1lIjoidGFubWF5MTE3IiwiZnVsbE5hbWUiOiJKYW5lIERvZSIsImlhdCI6MTcyNjA2MzQ4OSwiZXhwIjoxNzI2OTI3NDg5fQ.2QW8VOw7qHdradJftL5s-QEvV7IkvY4jeoILRwsAPEk"; // Replace this with your actual token

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
      console.log("userdata ",userdata);
      

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


<>
<div >
          <Editmodel/>
          <UserInfo user={userdata}/>
          <Header name="Resume" />
          <Resume user={userdata}/>
          <Header name="Skills" />
          <Skills user={userdata}/>
          <Header name="Education" />
          <Education user={userdata}/>
          <Header name="Experiences" />
          <Experiences user={userdata}/>
          <Header name="Achievements" />
          <Achievements user={userdata}/>
          <Header name="Projects" />
          <Projects user={userdata}/>
          <Header name="Ratings" />
          <Ratings user={userdata}/>
          <Header name="Awards" />
          <Awards user={userdata}/>
          <Header name="CodingProfiles" />
          <div className='interactive-card'>
            <CodingProfiles user={userdata}/>
          </div>
          <Header name="SocialMediaprofile" />
          <SocialMediaprofile user={userdata}/>
        </div>

</>
  );
}

export default LoginUserProfile;
