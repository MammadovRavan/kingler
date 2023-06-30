import React from 'react'
import './PopularCard.css'
const PopularCard = ({ikon,information,tarix,trspant}) => {
  return (
 
   <div className="pn-card">
        <img src={ikon} alt="" />
    <div className="text-pn">
        <h1>{information}</h1>
        <h2>{tarix} <span>{trspant}</span></h2>
    </div>
   </div>

  )
}

export default PopularCard