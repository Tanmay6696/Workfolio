import React, { useState } from "react";
import UserForm from "./Components/RegisterUser"; // Signup Form
import LoginUserProfile from "./LoginUserProfile"; // Login Form
import Buttons from "./Components/Buttons"; // Button Component
import Login from "./Login";

const LoginorSignupfile = () => {
  const [isLogin, setIsLogin] = useState(true); // Controls whether to show login or signup

  // Function to set login state
  const handleLogin = () => {
    
    setIsLogin(true); // Set to login
  };

  // Function to set signup state
  const handleSignup = () => {
    
    setIsLogin(false); // Set to signup
  };

  return (
    <div >
      <div >
        <Buttons buttonname="Login" onClick={handleLogin} />
        <Buttons buttonname="Sign Up" onClick={handleSignup} />
        
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>

        {/* Render the appropriate form based on the state */}
        {isLogin ? <Login /> : <UserForm />}

        
      </div>
    </div>
  );
};



export default LoginorSignupfile;
