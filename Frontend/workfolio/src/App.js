import Navbar from './Components/Navbar';
import Video from './Components/Video';
import Profilesection from './Components/Profilesection';
import AllComponentfile from './AllComponentfile';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginorSignupfile from './LoginorSignupfile';
import Login from './Login';
import LoginUserProfile from './LoginUserProfile';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import IndividualUser from './IndividualUser';
import { setSearchResultShownOrNot ,setsearchlist ,loginSuccess} from './Store/UserDataSlice';
import Constant from './Constant';
import jwtDecode from "jwt-decode";


function App() {
      
  const [newaccessToken, setNewaccessToken] = useState(false);
  const [Userdata, setUserdata] = useState([]);
  const [user, setUser] = useState([]);
  const dispatch = useDispatch();
  function clickonappcomponent(){
    dispatch(setSearchResultShownOrNot(false));
    dispatch(setsearchlist([]));
  }
 
  

  const isTokenExpired = (token) => {
    if (!token) return true;  // If no token, consider it expired

      const payload = JSON.parse(atob(token.split('.')[1]));  // Decode JWT payload
      return payload.exp * 1000 < Date.now();  // Compare expiration time with current time
  };
  
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
        console.log("accessToken", response.data.refreshToken);
        console.log("accessToken", accessToken, "newRefreshToken", newRefreshToken);
        

        // Update tokens in localStorage

        localStorage.setItem('accessToken', accessToken);
        // const decodedToken = jwtDecode(accessToken);
        // console.log("Decoded Token:", decodedToken);
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
  axios.interceptors.request.use(async (config) => {
      let token = localStorage.getItem('accessToken');      
      if (isTokenExpired(token)) {
              if(!localStorage.getItem('refreshToken')){
                history('/userprofile');
              }
              else{
                token = await refreshAccessToken();  // Get a new token if expired
              }
      }

      if (token) {
          config.headers['Authorization'] = `Bearer ${token}`;  // Attach token to request
      }
      console.log("config");
      
      // const dataofloginuser=await axios.get(`${Constant}/api/v1/users/getdetails`);
      // console.log("dataofloginuser",dataofloginuser.data.data);
      // setUser(dataofloginuser.data.data);
      return config;
  }, (error) => {
      return Promise.reject(error);
  });
  

//   axios.interceptors.response.use(
//     response => response,
//     async error => {
//         const originalRequest = error.config;
//         if (error.response.status === 401 && !originalRequest._retry) {
//             originalRequest._retry = true;
//             const newAccessToken = await refreshAccessToken();
//             axios.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
//             return axios(originalRequest);
//         }
//         return Promise.reject(error);
//     }
//   );
  const history = useNavigate();
  
  
  return (
    <div className="App" onClick={clickonappcomponent}>
      <Routes>
        <Route path="/" element={<AllComponentfile />} />
        {newaccessToken && (
          <Route path="/profile" element={<IndividualUser userdata={Userdata} />} />
        )}
        {user ? (
          <Route path="/profile" element={<IndividualUser userdata={Userdata} />} />
        ) : (
          <Route path="/userprofile" element={<LoginorSignupfile />} />
        )}
        
      </Routes>
    </div>
  );
}

export default App;
