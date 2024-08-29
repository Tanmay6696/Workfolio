import React from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import '../Componentcss/UserInfo.css';
const UserInfo = ({user}) => {
  return (
    <div className="UserInfo">
      <div className="UserPhoto">
        <div className="Userphotos">
          <img src={user.profilePicture?user.profilePicture:''} className="Userphotoimg"/>
          
        </div>
      </div>
      <div className="UserSummary">
        <div className="name">
          <span className="names">{user.name?user.name:"Tanmay Vinay dahale"}</span>
        </div>
        <div className="role">
          <span className="roles">{user.position?user.position:"Tanmay Vinay dahale"}</span>
        </div>
        <div className="summary">
          <span className="summary-content">{user.summary?user.summary:"Summary SummarySummarySummary Summary Summaryvv Summary Summary             Summary Summary SummarySummarySummary Summary Summaryvv Summary             Summary Summary Summary SummarySummarySummary Summary Summaryv            Summary Summary Summary Summary SummarySummarySummary Summary Summaryvv Summary Summary            Summary Summary SummarySummarySummary Summary Summaryvv Summary             Summary Summary Summary SummarySummarySummary Summary Summaryvv            Summary Summary Summary"}
            
          </span>
        </div>
      </div>
    </div>
  );
}

export default UserInfo