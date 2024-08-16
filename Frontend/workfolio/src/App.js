import Navbar from './Components/Navbar';
import Video from './Components/Video';
import Profilesection from './Components/Profilesection';
import AllComponentfile from './AllComponentfile';
import React, { useEffect } from 'react';
import axios from 'axios';


function App() {
  const getdata=async()=>{
    
    try{
      console.log("response   ");
      const response=await axios.get('http://localhost:3001/');
      console.log(response);
      
    }
    catch(e){
      console.log("erros ",e);
    }
  }
  useEffect(()=>{getdata()});
  return (
    <div className="App">
      <AllComponentfile/>
      
    </div>
  );
}

export default App;
