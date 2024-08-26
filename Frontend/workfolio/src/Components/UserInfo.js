import React from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import '../Componentcss/UserInfo.css';
const UserInfo = ({name,photo,position ,summary,Width}) => {
  return (
    <div className="UserInfo">
      <div className="UserPhoto">
        <div className="Userphotos">
          <img src={photo?photo:''} style={{width:Width?Width:''}} className="Userphotoimg"/>
          
        </div>
      </div>
      <div className="UserSummary">
        <div className="name">
          <span className="names">{name?name:"Tanmay Vinay dahale"}</span>
        </div>
        <div className="role">
          <span className="roles">{position?position:"Tanmay Vinay dahale"}</span>
        </div>
        <div className="summary">
          <span className="summary-content">{summary?summary:"Summary SummarySummarySummary Summary Summaryvv Summary Summary             Summary Summary SummarySummarySummary Summary Summaryvv Summary             Summary Summary Summary SummarySummarySummary Summary Summaryv            Summary Summary Summary Summary SummarySummarySummary Summary Summaryvv Summary Summary            Summary Summary SummarySummarySummary Summary Summaryvv Summary             Summary Summary Summary SummarySummarySummary Summary Summaryvv            Summary Summary Summary"}
            
          </span>
        </div>
      </div>
    </div>
  );
}

export default UserInfo