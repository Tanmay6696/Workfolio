import React from 'react'
import '../Componentcss/Achievementss.css'
import Header from './Header.js'
const Achievements = () => {
  return (
    <div className='Achievement'>
       <Header name="Achievements"/>
      <div>
        <h1>Achievements</h1>
      </div>
      <div>
        <div>
          <div>
            <span>title</span>
          </div>
          <div>
            <div><span>description</span></div>
            <div><span>issuer</span></div>
            <div><span>date</span></div>
            <button>url</button>
          </div>
        </div>
      </div>
    </div>
  )
}
//description title date category issuer url level

export default Achievements