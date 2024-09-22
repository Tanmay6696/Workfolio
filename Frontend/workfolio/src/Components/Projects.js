import React, { useState ,useEffect} from 'react';
import '../Componentcss/Projectss.css'
import Header from './Header'
import '../Allcomponentfile.css';
import Buttons from './Buttons.js';
import Editmodel from './ProjectsModels.js';
const Projects = ({ user }) => {
  let User = user.projects;
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const [editindex,seteditindex]=useState(0);
  const [showeditmodel,setshoweditmodel]=useState(0);
  const edittheproject=(index)=>{
    seteditindex(index);
    setshoweditmodel(1);
    
  }

  return (
    <>
      <div className='interactive-card'>
        {User != undefined ?
          User.map((project, index) => (
            <div className='item' key={index}>
              <Buttons buttonname="Edit" onClick={()=>{edittheproject(index);}}/>

              <div className='name'>
                <span>{project.title ? project.title : ""}</span>
              </div>
              <div className='details'>
                <div className='detailsname'>
                  <span>{project.description ? project.description : ""}</span>
                </div>
                <div className='detailssection'>
                  <div className='dateandbutton'>
                    <div className='projectsdetailsofdateandurl'>
                      <span>{`${project.durationFrom ? new Date(project.durationFrom).toLocaleDateString(undefined, options) : ""} to ${project.durationTo ? new Date(project.durationTo).toLocaleDateString(undefined, options) : ""}`}</span>
                      
                    </div>

                    <Buttons className="btn-outline-warning" src={project.url ? project.url : ''} buttonname="View More" />
                  </div>
                </div>
              </div>
            </div>
          )) : <></>}

      </div>
      {showeditmodel?<Editmodel index={editindex}/>:<></>}
    </>
  )
}

export default Projects