// src/Login.js

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setAccessToken, setEmails, loginSuccess } from "./Store/UserDataSlice";
import './Login.css';
import Constant from "./Constant.js";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const history = useNavigate();
  const clickonforrefreshaccesstoken = async () => {
    try {
      console.log("before refreshAccessToken");
      await refreshAccessToken();
      console.log("refreshAccessToken");

    }
    catch (error) {
      console.error('Failed to refresh access token', error);
    }
  }
  const refreshAccessToken = async () => {
    try {
      const refreshToken = localStorage.getItem('refreshToken');  // Get refresh token
      console.log("refreshToken", refreshToken);

      const response = await axios.post(
        `${Constant}/api/v1/users/refreshaccesstoken`,
        {},
        {
          headers: { 'x-refresh-token': refreshToken }  // Send refresh token in custom header
        }
      );

      const { accessToken, newRefreshToken } = response.data;
      console.log("response", response);
      console.log("accessToken", accessToken, "newRefreshToken", newRefreshToken);


      // Update tokens in localStorage
      localStorage.setItem('accessToken', accessToken);
      if (response.data.refreshToken) {
        localStorage.setItem('refreshToken', response.data.refreshToken);  // Optional: if refresh tokens are rotated
      }

      return accessToken;
    } catch (error) {
      console.error('Failed to refresh access token', error);
      // Handle token refresh failure (e.g., log out user)
      throw error;
    }
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    let accessTokens;
    try {
      const response = await axios.post(`${Constant}/api/v1/users/login`, {
        email,
        password,
      });

      accessTokens = response.data.data.accessToken;
      localStorage.setItem("accessToken", response.data.data.accessToken);
      localStorage.setItem("refreshToken", response.data.data.refreshToken);
      console.log("accessToken", response.data.data.accessToken);
      const payload = JSON.parse(atob(accessTokens.split('.')[1]));
      console.log("payload", payload);
      //history("/"); // Redirect to home or another route after login

    } catch (err) {
      setError("Invalid email or password");
      console.error(err);
    }
  };

  return (
    <div >
      <main className="container">
        <h2>Login</h2>
        {error && <p>{error}</p>}
        <form className="form_container" onSubmit={handleSubmit}>
          <div className="input-field">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
              required name="username" id="username"
              placeholder="Enter Your Username or Email" />
            <div className="underline"></div>
          </div>
          <div className="input-field">
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}
              required name="password" id="password"
              placeholder="Enter Your Passwords" />
            <div className="underline"></div>
          </div>

          <input type="submit" value="Continue" />
        </form>
      </main>
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
