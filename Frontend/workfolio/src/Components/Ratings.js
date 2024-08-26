import React from 'react'
import '../Componentcss/Ratingss.css'
import Header from './Header'
const Ratings = ({Ratingscore}) => {
  return (
    <div className='Rating'>
      
      <span>{Ratingscore?Ratingscore:''}</span>
    </div>
  )
}

export default Ratings