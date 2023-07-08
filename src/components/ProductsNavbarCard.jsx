import React from 'react'

const ProductsNavbarCard = ({ikon,information,cost}) => {
  return (
    <div className="pr-card">
        <img src={ikon} alt="" />
        <h1>{information}</h1>
        <h2>{cost}</h2>
    </div>
  )
}

export default ProductsNavbarCard