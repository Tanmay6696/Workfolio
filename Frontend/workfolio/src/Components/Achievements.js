import React from 'react'
import '../Componentcss/Achievementss.css'
import '../Allcomponentfile.css';
import Header from './Header.js'
import Butttons from './Buttons.js';
const Achievements = () => {
  return (
    <>
      <Header name="Achievements" />
      <div className='interactive-card'>
        <div className='item'>
          <div className='name'>
            <span>title</span>
          </div>
          <div className='details'>
            <div className='detailsname'>
              <span>description</span>
            </div>
            <div className='detailssection'>
              <div className='issuerandspanandbutton'>
              <div className='issuerandspan'>
                  <span>issuer</span>
                  <span>date</span>
                
              </div>
              
              <Butttons classname="btn-outline-warning" buttonname="url"/></div>
            </div>
            

          </div>
          
        </div>
        <div className='item'>
          <div className='name'>
            <span>title</span>
          </div>
          <div className='details'>
            <div className='detailsname'>
              <span>description</span>
            </div>
            <div className='detailssection'>
              <div className='issuerandspanandbutton'>
              <div className='issuerandspan'>
                  <span>issuer</span>
                  <span>date</span>
                
              </div>
              
              <Butttons classname="btn-outline-warning" buttonname="urg"/>
              </div>
            </div>
            

          </div>
          
        </div>
      </div>
    </>
  )
}
//description title date category issuer url level

export default Achievements