import React from 'react'
import '../Componentcss/Projectss.css'
import Header from './Header'
import '../Allcomponentfile.css';
import Butttons from './Buttons.js';
const Projects = () => {
  return (
    <>
      <Header name="Projects"/>
      <div className='interactive-card'>
      <div className='item'>
          <div className='name'>
            <span>Title</span>
          </div>
          <div className='details'>
            <div className='detailsname'>
              <span>descriptionhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription</span>
            </div>
            <div className='detailssection'>
              <div className='dateandbutton'>
              <div className='projectsdetailsofdateandurl'>
                <span>from to</span>
                
              </div>
              <Butttons classname="btn-outline-warning" buttonname="urg"/>  
              </div>
              
            </div>
            

          </div>
          
        </div>
      </div>
      </>
  )
}

export default Projects