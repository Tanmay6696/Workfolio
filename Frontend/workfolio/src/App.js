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

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<AllComponentfile/>}/>
        <Route path="/Login" element={<LoginorSignupfile/>}/>

        {/* <Route path="/userprofile" element={<LoginUserProfile/>}>
        </Route> */}
      </Routes>
    </BrowserRouter>
     
      
      
    </div>
  );
}

export default App;
