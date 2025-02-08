import React, { useState ,useEffect} from 'react';
import Buttons from './Buttons.js';
import '../Componentcss/Awardss.css'
import Header from './Header'
import EditAwardsModel from './AwardsModels.js';
import Constant from '../Constant.js';
import { useSelector } from 'react-redux';
const Awards = ({user,awardName, issuingOrganization, issueDate, awardDescription}) => {
  let userdata=useSelector((state)=>state.userdata.userdata);

  let User=user.awards;
  const options={year:'numeric',month:'long',day:'numeric'};
  const [editindex,seteditindex]=useState(0);
  const [showeditmodel,setshoweditmodel]=useState(0);
  const edittheaward=(index)=>{
    // alert("hiiiiiiiii alert");
    seteditindex(index);
    // alert(editindex);
    setshoweditmodel(1);
    // alert(showeditmodel);
  }
  return (
    <>
      <div className='interactive-card'>
        <div className='main-awards'>
          {User!=undefined ?User.map((award,index)=>(
            <div className='AwardDetails' key={index}>
            <div className='awardname'>
              <span>{award.awardName ? award.awardName :"Award Name"}</span>
            </div>
            {userdata && userdata?.username!=User.username &&  <Buttons buttonname="Edit" onClick={() => edittheaward(index)} />}
            <div className='Awarddetails'>
              <div className='issuedate'>
                <span>{award.issuingOrganization ? award.issuingOrganization : "issuingOrganization"}</span>
                <span> - {award.issueDate ?  new Date(award.issueDate).toLocaleDateString(undefined,options) : "issueDate"}</span>
              </div>
              <div className='awardsdescription'>
                <span>{award.description ? award.description : "awardDescription"}</span>
              </div>
            </div>
          </div>
          )):<></>}
          
        </div>
      </div>
      {showeditmodel ? <EditAwardsModel index={editindex} /> : null}

    </>
  )
}

export default Awards