import React from 'react'
import { Link } from 'react-router-dom'
import './ProductsNavbarCArd.css'
const ProductsNavbarCard = ({ikon,information,cost}) => {
  return (
    <div className="pr-card">
        <div className="kart-img">
        <img src={ikon} alt="" />
        <div className="black-card">
        <Link to='/shop' href=""> Get in shop</Link>
        </div>
        </div>
        
        <h1>{information}</h1>
        <h2>{cost}</h2>
    </div>
  )
}

export default ProductsNavbarCard