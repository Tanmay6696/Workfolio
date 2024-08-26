import React from 'react'
import '../Componentcss/Awardss.css'
import Header from './Header'
const Awards = ({awardName, issuingOrganization, issueDate, awardDescription}) => {
  return (
    <>
      <div className='interactive-card'>
        <div className='main-awards'>
          <div className='AwardDetails'>
            <div className='awardname'>
              <span>{awardName ? awardName : "awardName"}</span>
            </div>
            <div className='Awarddetails'>
              <div className='issuedate'>
                <span>{issuingOrganization ? issuingOrganization : "issuingOrganization"}</span>
                <span> - {issueDate ? issueDate : "issueDate"}</span>
              </div>
              <div className='awardsdescription'>
                <span>{awardDescription ? awardDescription : "awardDescription"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Awards