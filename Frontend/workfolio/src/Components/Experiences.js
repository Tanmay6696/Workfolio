import React from 'react';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa'; // Import icons from react-icons
import '../Componentcss/Experiencess.css';

const Experiences = () => {
  return (
    <>
    <header className='experience-header-card'>
        <h1>Experiences</h1>
      </header>
    <div className='experience-card'>
      
      <div className='experience-content'>
        <div className='experience-item'>
          <div className='experience-company'>
            <FaBriefcase className='icon' />
            <span>Cognizant</span>
          </div>
          <div className='experience-details'>
            <div className='experience-title'>
              <span>Programmer Anlayst</span>
            </div>
            <div className='experience-duration'>
              <FaCalendarAlt className='icon' />
              <span>2018 - current</span>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    </>
  );
};

export default Experiences;
