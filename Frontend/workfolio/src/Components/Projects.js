import React from 'react'
import '../Componentcss/Projectss.css'
import Header from './Header'
import '../Allcomponentfile.css';
import Butttons from './Buttons.js';
const Projects = ({projectTitle,projecturl,projectDescription,projectFrom,projectTo}) => {
  return (
    <>
      <div className='interactive-card'>
        <div className='item'>
          <div className='name'>
            <span>{projectTitle?projectTitle:""}</span>
          </div>
          <div className='details'>
            <div className='detailsname'>
              <span>{projectDescription?projectDescription:""}</span>
            </div>
            <div className='detailssection'>
              <div className='dateandbutton'>
                <div className='projectsdetailsofdateandurl'>
                  <span>{`${projectFrom?projectFrom:""} to ${projectTo?projectTo:""}`}</span>
                  <span>{projecturl?projecturl:''}</span>
                </div>

                <Butttons className="btn-outline-warning" buttonname="View More" />  
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects