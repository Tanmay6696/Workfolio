import React from 'react'
import '../Componentcss/Resumes.css';
import Buttons from './Buttons';
import '../Allcomponentfile.css'

import Header from './Header.js';
const Resume = ({user}) => {
  return (
    <>
      <div className="interactive-card" >
          <div className='ResumeDownload'>
            <Buttons buttonname="View Resume" />
          </div>


       
      </div>
        
    </>
  )
}

export default Resume