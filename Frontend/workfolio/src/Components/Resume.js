import React from 'react'
import '../Componentcss/Resumes.css';
import Buttons from './Buttons';
import Header from './Header.js';
const Resume = () => {
  return (
    <>
      <Header name="Resume"/>
      <Buttons buttonname="Download" />
      <div className='Resume'>
        {/* <div className='ResumeIntro'>
          <span>Resume of Tanmay Dahale</span>
          
        </div> */}
        <div className='ResumedownloadSection'>
          <div className='ResumeDownload'>
            <Buttons buttonname="View Resume" />
          </div>


        </div>
      </div>
    </>
  )
}

export default Resume