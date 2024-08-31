import React from 'react'
import '../Componentcss/Awardss.css'
import Header from './Header'
const Awards = ({user,awardName, issuingOrganization, issueDate, awardDescription}) => {
  let User=user.awards;
  const options={year:'numeric',month:'long',day:'numeric'};

  return (
    <>
      <div className='interactive-card'>
        <div className='main-awards'>
          {User!=undefined ?User.map((award,index)=>(
            <div className='AwardDetails' key={index}>
            <div className='awardname'>
              <span>{award.awardName ? award.awardName :"Award Name"}</span>
            </div>
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
    </>
  )
}

export default Awards