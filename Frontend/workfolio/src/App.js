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
import IndividualUser from './IndividualUser';
import { setSearchResultShownOrNot ,setsearchlist } from './Store/UserDataSlice';
function App() {
  const dispatch = useDispatch();
  function clickonappcomponent(){
    dispatch(setSearchResultShownOrNot(false));
    dispatch(setsearchlist([]));
    console.log("app")
  }
  return (
    <div className="App" onClick={clickonappcomponent}>
      <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<AllComponentfile/>}/>
        <Route path="/searchuserprofile" element={<IndividualUser/>}/>

        <Route path="/userprofile" element={<LoginUserProfile/>}>
        </Route>
      </Routes>
    </BrowserRouter>
     
      
      
    </div>
  );
}

export default App;
