import React from 'react'
import './Categories.css'
import { FaBars } from 'react-icons/fa'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from 'swiper';
const Categories = () => {
  return (
    <div className="main-section">
      <div className="categories">
        <h1><FaBars className='icon-categories' /> Categories</h1>

        <a href="">Ammunition</a>
        <a href="">Firearms</a>
        <a href="">Handguns</a>
        <a href="">Knives</a>
        <a href="">Recent Products</a>
        <a href="">Rifles</a>
        <a href="">Shotguns</a>
      </div>
      
      <div className="beretta">
            <div className="beretta-text">
              <h1>BERETTA</h1>
              <h4>MODEL 92 FS INOX</h4>
              <h3>$370.00</h3>
              <button>Shop Now</button>
            </div>
          </div>

    </div>
  )
}

export default Categories