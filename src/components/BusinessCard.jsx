import React from 'react'
import './BusinessCard.css'
const BusinessCard = ({photo}) => {
  return (
    <div className="business-card">
        <img src={photo} alt="" />
    </div>
  )
}

export default BusinessCard