import React from 'react'
import '../Componentcss/Ratingss.css'
import Header from './Header'
const Ratings = ({user}) => {
  let User=user.ratings;

  return (
    <div className='Rating'>
      {User.map((rate,index)=>(<span>{rate.score?rate.score:''}</span>))}
      
    </div>
  )
}

export default Ratings