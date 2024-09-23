import React, { useState ,useEffect} from 'react';
import '../Componentcss/Achievementss.css';
import '../Allcomponentfile.css';
import Header from './Header.js';
import Buttons from './Buttons.js';
import EditAchievementsModel from './AchievementsModels.js';

const Achievements = ({ user,title, description, date_awarded, category, issuer, certificate_url, level }) => {
  let User=user.achievements;
  
  const options={year:'numeric',month:'long',day:'numeric'};
  const [editindex,seteditindex]=useState(0);
  const [showeditmodel,setshoweditmodel]=useState(0);
  const edittheachievement=(index)=>{
    // alert("hiiiiiiiii alert");
    seteditindex(index);
    // alert(editindex);
    setshoweditmodel(1);
    // alert(showeditmodel);
  }
  return (
    <>
      {User!=undefined? (
        User.map((user, index) => (
          <div key={index} className='interactive-card'>
            <div className='item'>
              <div className='name'>
                <span>{user.title ? user.title : "Achievement Title"}</span>
              </div>
              <Buttons buttonname="Edit" onClick={() => edittheachievement(index)} />
              <div className='details'>
                <div className='detailsname'>
                  <span>{user.description ? user.description : "Achievement Description"}</span>
                </div>
                <div className='detailssection'>
                  <div className='issuerandspanandbutton'>
                    <div className='issuerandspan'>
                      <span>{user.issuer ? user.issuer : "Issuer"}</span>
                      <span>{user.date_awarded ? new Date(user.date_awarded).toDateString() : "Date"}</span>
                    </div>
                    <Buttons
                      classname="btn-outline-warning"
                      buttonname={user.certificate_url ? "View Certificate" : "No URL"}
                      buttonlink={user.certificate_url ? user.certificate_url : "#"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No achievements to display</p> // Fallback message when there are no users
      )}
      {showeditmodel ? <EditAchievementsModel index={editindex} /> : null}
    </>
  );
};

export default Achievements;
