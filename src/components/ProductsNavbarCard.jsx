import React from 'react'
import './ProductsNavbarCArd.css'
const ProductsNavbarCard = ({ikon,information,cost}) => {
  return (
    <div className="pr-card">
        <div className="kart-img">
        <img src={ikon} alt="" />
        <div className="black-card">
        <button href=""> Get in shop</button>
        </div>
        </div>
        
        <h1>{information}</h1>
        <h2>{cost}</h2>
    </div>
  )
}

export default ProductsNavbarCard