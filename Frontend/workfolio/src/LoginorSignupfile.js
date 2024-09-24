import React, { useState } from "react";
import UserForm from "./Components/RegisterUser"; // Signup Form
import LoginUserProfile from "./LoginUserProfile"; // Login Form
import Buttons from "./Components/Buttons"; // Button Component

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
        {isLogin ? <LoginUserProfile /> : <UserForm />}

        <p>
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};



export default LoginorSignupfile;
