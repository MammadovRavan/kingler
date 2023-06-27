import React from 'react'
import './ProductsCard.css'
const ProductsCard = ({melumat,icon,qiymet}) => {
  return (
    <div className='kart'>
        <img src={icon} alt="" />
        <h2>{melumat}</h2>
        <h3>{qiymet}</h3>
    </div>
  )
}

export default ProductsCard