import React, { useState } from 'react'
import '../Componentcss/Resumes.css';
import Buttons from './Buttons';
import '../Allcomponentfile.css'

import Header from './Header.js';
const Resume = ({user}) => {
  const [showresume,setshowresume]=useState(false);
  const openresume=(resume)=>{
    setshowresume(true);
  }
  //console.log("user.resume",user.resume);
  
  
  return (
    <>
      <div className="interactive-card" >
          <div className='ResumeDownload'>
            <Buttons buttonname="View Resume" onClick={()=>openresume(user.resume)} />{showresume?<iframe src={user.resume} width="600" height="500"></iframe>:''}
            
          </div>


       
      </div>
        
    </>
  )
}

export default Resume