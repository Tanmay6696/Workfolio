import React from 'react'
import '../Componentcss/Awardss.css'
import Header from './Header'
const Awards = () => {
  return (
    <div className='Award'>Awards
    <Header name="Award"/>
    <div className='interactive-card'>
        <div className='main-awards'>
          <div className='AwardDetails'>
            <div className='awardname'>
              
              <span>Awards Name</span>
            </div>
            <div className='Awarddetails'>
              <div className='issuedate'>
              <span>issuingOrganization issuingOrganization</span>
              <span> - DATE </span>
              </div>
              <div className='awardsdescription'>
                <span> Electrical, Electronics and Communications Engineering</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Awards