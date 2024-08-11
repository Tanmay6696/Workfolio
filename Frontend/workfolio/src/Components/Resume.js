import React from 'react'
import '../Componentcss/Resumes.css';
import Buttons from './Buttons';
const Resume = () => {
  return (
    <div className='Resume'>
        <div className='ResumeIntro'>
          <span>Resume of Tanmay Dahale</span>
          <Buttons buttonname="Download"/>
        </div>
        <div className='ResumedownloadSection'>
          <div className='ResumeDownload'>
            <Buttons buttonname="View Resume"/>
          </div>
          
          
        </div>
    </div>
  )
}

export default Resume