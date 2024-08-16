import Navbar from './Components/Navbar';
import Video from './Components/Video';
import Profilesection from './Components/Profilesection';
import AllComponentfile from './AllComponentfile';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const [userdata,setuserdata]=useState([]);
  const getdata = async () => {
    try {
      const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI5MTcwNmMxNC02NWI5LTQ0ZDYtOThjYy04ZWYyZWVlOTRjOTYiLCJlbWFpbCI6ImphbmVkb2VAZXhhbXBsZS5jb20iLCJ1c2VybmFtZSI6ImphbmVkb2UiLCJmdWxsTmFtZSI6IkphbmUgRG9lIiwiaWF0IjoxNzIzODEwMDMwLCJleHAiOjE3MjM4OTY0MzB9.DbwbEreo5i5mafvWfnn4BlFp2iK2EBkhzD-7kt2F7rQ";
      const response = await axios.post('http://localhost:3000/api/v1/johndoe@example.com/Userdetails',{},{
        headers:{
          'Authorization':`${token}`
        }
      });
      
      setuserdata(response.data);
      console.log("response from getusera all data ",userdata);
    } catch (e) {
      console.log("Error:", e);
    }
  };

  // Use useEffect to call getdata on component mount
  useEffect(() => {
    
    
    getdata(); 
    console.log("HI  userdata ",userdata.fullName);
    // Call the function, not invoke it directly
  }, []);
  return (
    <div className="App">
      
        <a>{userdata.fullName}</a>
     
      <AllComponentfile/>
      
    </div>
  );
}

export default App;
