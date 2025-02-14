import React from 'react'
import '../Componentcss/Videosection.css';

const Video = ({user}) => {
  return (
    <div className='Videosection'>{user?.introVideo && <video controls width="100%" height="100%">
      <source src={user.introVideo} type="video/webm" />
      
      Sorry, your browser doesn't support videos.
    </video> }
      
        </div>
  )
}

export default Video