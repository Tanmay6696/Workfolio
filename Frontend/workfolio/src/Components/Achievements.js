import React from 'react';
import '../Componentcss/Achievementss.css';
import '../Allcomponentfile.css';
import Header from './Header.js';
import Butttons from './Buttons.js';

const Achievements = ({ title, description, date_awarded, category, issuer, certificate_url, level }) => {
  return (
    <>
      <div className='interactive-card'>
        <div className='item'>
          <div className='name'>
            <span>{title ? title : "Achievement Title"}</span>
          </div>
          <div className='details'>
            <div className='detailsname'>
              <span>{description ? description : "Achievement Description"}</span>
            </div>
            <div className='detailssection'>
              <div className='issuerandspanandbutton'>
                <div className='issuerandspan'>
                  <span>{issuer ? issuer : "Issuer"}</span>
                  <span>{date_awarded ? new Date(date_awarded).toDateString() : "Date"}</span>
                </div>
                <Butttons
                  classname="btn-outline-warning"
                  buttonname={certificate_url ? "View Certificate" : "No URL"}
                  buttonlink={certificate_url ? certificate_url : "#"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Achievements;
