import React from 'react';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa'; // Import icons from react-icons
import '../Componentcss/Experiencess.css';
import Header from './Header.js'
const Experiences = () => {
  return (
    <>
    <Header name="Experiences"/>
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
