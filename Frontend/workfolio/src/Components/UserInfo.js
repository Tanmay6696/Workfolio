import React from 'react';
import logo from '../logo.svg';

import '../Componentcss/UserInfo.css';
const UserInfo = () => {
  return (
    <div className='UserInfo'>
        <div className='UserPhoto'>
          <div className='Userphotos'>
            <img src={logo} className='Userphotoimg'/>
          </div>
          
        </div>
        <div className='UserSummary'>
          
            <div><h1>Tanmay Vinay dahale</h1></div>
            <div><h2>Tanmay Vinay dahale</h2></div>
            <div>Summary SummarySummarySummary Summary Summaryvv Summary Summary Summary </div>
          

          
        </div>
    </div>
  )
}

export default UserInfo