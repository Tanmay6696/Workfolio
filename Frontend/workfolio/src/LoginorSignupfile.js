import React, { useEffect, useState } from 'react';
import UserForm from "./Components/RegisterUser"; // Signup Form
import LoginUserProfile from "./LoginUserProfile"; // Login Form
import Buttons from "./Components/Buttons"; // Button Component
import Login from "./Login";
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import Constant from "./Constant.js";

import { setAccessToken } from './Store/UserDataSlice';

const LoginorSignupfile = () => {
  const dispatch = useDispatch();
  const [isaccesstokencorrect,setisaccesstokencorrect]=useState(false);
  const [isLogin, setIsLogin] = useState(true); // Controls whether to show login or signup
  //const accessToken = useSelector((state) => state.accessToken);
  const accessToken = useSelector((state) => state.userdata.accessToken);
  const Emailforurl = useSelector((state) => state.userdata.email);

  // Function to set login state
  const handleLogin = () => {
    
    setIsLogin(true); // Set to login
  };

  // Function to set signup state
  const handleSignup = () => {
    
    setIsLogin(false); // Set to signup
  };
  //let Emailforurl=useSelector((state) => state.email);
  const getdata = async () => {
    try {
      console.log("No Error fetching user data 1");
      const response = await axios.post(`${Constant}/api/v1/refreshaccesstoken`, {}, {
        cookie: {
          'Authorization': `${accessToken}` // Ensure you include 'Bearer' if needed
        }
      }); 
      dispatch(setAccessToken(response.data.accessToken));
      console.log("No Error fetching user data 2",response.data);
      setisaccesstokencorrect(true);
      console.log("No Error fetching user data 3");
      

    } catch (e) {
      
      setisaccesstokencorrect(false);
      console.log("Error fetching user data:", e);
    }
  };
  useEffect(() => {
    if(accessToken ||Emailforurl){
      getdata();
    }
  }, []);

  return (
    <div >
      <div >{(!isaccesstokencorrect)?<><Buttons buttonname="Login" onClick={handleLogin} />
        <Buttons buttonname="Sign Up" onClick={handleSignup} />
        
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>

        {/* Render the appropriate form based on the state */}
        {isLogin ? <Login /> : <UserForm />}</>:<><LoginUserProfile/></>}
        

        
      </div>
    </div>
  );
};



export default LoginorSignupfile;
