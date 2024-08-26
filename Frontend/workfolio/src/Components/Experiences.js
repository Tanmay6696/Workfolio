import React from 'react';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa'; // Import icons from react-icons
import '../Componentcss/Experiencess.css';
import '../Allcomponentfile.css'
import Header from './Header.js'
const Experiences = ({CompanyName,CompanyRole,fromDate,Todate}) => {
  return (
    <>
    
    <div className='interactive-card'>
      
      <div className='experience-content'>
        <div className='experience-item'>
          <div className='experience-company'>
            <FaBriefcase className='icon' />
            <span>{CompanyName?CompanyName:"Cognizant"}</span>
          </div>
          <div className='experience-details'>
            <div className='experience-title'>
              <span>{CompanyRole?CompanyRole:"Programmer Anlayst"}</span>
            </div>
            <div className='experience-duration'>
              <FaCalendarAlt className='icon' />
              <span>{fromDate?fromDate:"2018"} - {Todate?Todate:"currentd"}</span>
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
