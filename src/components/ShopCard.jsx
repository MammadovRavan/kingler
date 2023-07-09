import React from 'react'
import './ShopCard.css'
const ShopCard = ({image,information,qiymet}) => {
  return (
    <div className='shopcard'>
        <div className="kart-img">
        <img src={image} alt="" />
        <div className="black-card">
      <button>BUY</button>
    </div>
        </div>
        <h1>{information}</h1>
        <h2>{qiymet}</h2>
    </div>
  )
}

export default ShopCard