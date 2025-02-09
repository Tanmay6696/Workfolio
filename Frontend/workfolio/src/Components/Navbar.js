import React from 'react'

import { FaRegUserCircle } from "react-icons/fa";
import  Searchbar  from "./Searchbar.js";
import '../Componentcss/Navbar.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect ,useState} from 'react';
const Navbar = () => {
  const [elementpath, setelementpath] = useState("/userprofile");
  const data=useSelector((state) => state.userdata.userdata);
    console.log("data inside navbar",data);
  useEffect(()=>{
    try{
      
      if(data){
        setelementpath("/profile");

      }
    }catch(e){
      console.log("error inside navbar",e);
    }
    
  },[data])
  return (
    <div className='Navbar'>
        <h1 style={{ margin: '20px 0 0 25px' }}>WorkFolio</h1>

        <Searchbar />
        <Link to={elementpath}>
        <FaRegUserCircle style={{ height:'50px',width:'50px'}} /></Link>
        
        
    </div>
  )
}

export default Navbar