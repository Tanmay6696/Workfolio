import Navbar from './Components/Navbar';
import Video from './Components/Video';
import Profilesection from './Components/Profilesection';
import AllComponentfile from './AllComponentfile';
import React, { useEffect } from 'react';
import axios from 'axios';


function App() {
  const getdata = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/v1/users/getdetails');
      console.log("response",response.data.message);
    } catch (e) {
      console.log("Error:", e);
    }
  };

  // Use useEffect to call getdata on component mount
  useEffect(() => {
    console.log("HI");
    
    getdata(); // Call the function, not invoke it directly
  }, []);
  return (
    <div className="App">
      <AllComponentfile/>
      
    </div>
  );
}

export default App;
