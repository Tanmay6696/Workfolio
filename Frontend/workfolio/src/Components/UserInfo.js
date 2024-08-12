import React from 'react';
import logo from '../logo.svg';

import '../Componentcss/UserInfo.css';
const UserInfo = () => {
  return (
    <div className="UserInfo">
      <div className="UserPhoto">
        <div className="Userphotos">
          <img src={logo} className="Userphotoimg" />
        </div>
      </div>
      <div className="UserSummary">
        <div className="name">
          <span className="names">Tanmay Vinay dahale</span>
        </div>
        <div className="role">
          <span className="roles">Tanmay Vinay dahale</span>
        </div>
        <div className="summary">
          <span className="summary-content">
            Summary SummarySummarySummary Summary Summaryvv Summary Summary
            Summary Summary SummarySummarySummary Summary Summaryvv Summary
            Summary Summary Summary SummarySummarySummary Summary Summaryvv
            Summary Summary Summary
          </span>
        </div>
      </div>
    </div>
  );
}

export default UserInfo