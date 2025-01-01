// src/Login.js

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setAccessToken ,setEmails } from "./Store/UserDataSlice";
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [error, setError] = useState("");
  const history = useNavigate();
  const dispatch = useDispatch();
  

  const handleSubmit = async (e) => {
    

    e.preventDefault();
    let accessTokens='';
    try {
      console.log(email,password);

      const response = await axios.post("https://workfoliobackend.onrender.com/api/v1/users/login", {
        email,
        password,
      });
    
    
      
      

      if (response.data.data.accessToken) {
        
        accessTokens =response.data.data.accessToken;
        console.log(accessTokens);
        //localStorage.setItem("token", response.data.data.accessToken);
        dispatch(setEmails(email));
        
        // FullfillthesccessTokenandemail(email,accessTokens);
        dispatch(setAccessToken(accessTokens));
        
        history("/"); // Redirect to home or another route after login
      }
    } catch (err) {
      setError("Invalid email or password");
      console.error(err);
    }
  };

  return (
    <div >
      <div >
      <>
          <main class="container">
              <h2>Login</h2>
              {error && <p>{error}</p>}
              <form onSubmit={handleSubmit}>
                  <div class="input-field">
                      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
            required  name="username" id="username"
                          placeholder="Enter Your Username or Email"/>
                      <div class="underline"></div>
                  </div>
                  <div class="input-field">
                      <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}
            required  name="password" id="password"
                          placeholder="Enter Your Passwords"/>
                      <div class="underline"></div>
                  </div>

                  <input type="submit" value="Continue"/>
              </form>

              {/* <div class="footer">
                  <span>Or Connect With Social Media</span>
                  <div class="social-fields">
                      <div class="social-field twitter">
                          <a href="#">
                              <i class="fab fa-twitter"></i>
                              Sign in with Twitter
                          </a>
                      </div>
                      <div class="social-field facebook">
                          <a href="#">
                              <i class="fab fa-facebook-f"></i>
                              Sign in with Facebook
                          </a>
                      </div>
                  </div>
              </div> */}
          </main>
      </>
        
        {/* <form onSubmit={handleSubmit}>
          
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">
            Login
          </button>
          
        </form> */}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
  },
  formContainer: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    width: "300px",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "5px 0",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Login;
