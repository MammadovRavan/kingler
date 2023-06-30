import React from 'react'
import './ProductsCard.css'
const ProductsCard = ({melumat,icon,qiymet}) => {
  return (
    <div className='kart'>
 <div className="kart-img">
    <img src={icon} alt="" />
    <div className="black-card">
      <button>ADD TO CARD</button>
    </div>
    </div>
    
    <h2>{melumat}</h2>
    <h3>{qiymet}</h3>
    
</div>
  )
}

export default ProductsCard