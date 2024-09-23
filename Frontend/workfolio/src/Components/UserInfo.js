import React from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import '../Componentcss/UserInfo.css';

const UserInfo = ({ user }) => {
  console.log("user info", user);

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
          <span className="names">{user && user.fullName ? user.fullName : "Sample Name"}</span>
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
