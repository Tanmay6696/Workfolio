// src/Login.js

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setAccessToken ,setEmails } from "./Store/UserDataSlice";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [error, setError] = useState("");
  const history = useNavigate();
  const dispatch = useDispatch();
  

  const handleSubmit = async (e) => {
    alert("hi");

    e.preventDefault();
    let accessTokens='';
    try {
      console.log(email,password);

      const response = await axios.post("http://localhost:3000/api/v1/users/login", {
        email,
        password,
      });
    //   console.log(response);
    
      
      

      if (response.data.data.accessToken) {
        alert("Login successful");
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
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
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
          
        </form>
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
