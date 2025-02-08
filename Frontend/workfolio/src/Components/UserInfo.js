import React from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import '../Componentcss/UserInfo.css';
import  { useSelector } from 'react-redux';

const UserInfo = ({ user }) => {
  //console.log("user info", user);
  let userdata=useSelector((state)=>state.userdata.userdata);
  return (
    <div className="UserInfo">
      <div className="UserPhoto">
        <div className="Userphotos">
          {user && user.profilePicture ? (
            <img src={user.profilePicture} alt="User Profile" className="Userphotoimg" />
          ) : (
            <FaRegUserCircle className="default-user-icon" />
          )}
        </div>
      </div>
      <div className="UserSummary">
        <div className="name">
          <span className="names" color={userdata?.username!=user.username ?'white':'black' }>{user && user.fullName ? user.fullName : "Sample Name"}</span>
        </div>
        <div className="role">
          <span className="roles">
            {user && user.experiences && user.experiences[0] && user.experiences[0].role
              ? user.experiences[0].role
              : "Sample Position"}
          </span>
        </div>
        <div className="summary">
          <span className="summary-content">
            {user && user.summary
              ? user.summary
              : `Summary Summary Summary Summary Summary vv Summary Summary Summary 
                 Summary Summary Summary vv Summary Summary Summary`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
