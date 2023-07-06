import React from 'react'
import './Categories.css'
import Button from './Button'
import { FaBars } from 'react-icons/fa'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from 'swiper';
import MovingComponent from 'react-moving-text'
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

      <Swiper className="mySwiper"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        }}>
        <SwiperSlide>
          <div className="beretta">
            <div className="beretta-img">
              <img src="https://res.cloudinary.com/dmqymruko/image/upload/v1687713423/beretta_hkfmyh.jpg" alt="" />
            </div>
            <div className="beretta-text">

              <MovingComponent
                type="fadeInFromTop"
                duration="1000ms"
                delay="0s"
                direction="normal"
                timing="ease"
                iteration="1"
                fillMode="none">
                <h1>BERETTA</h1>
              </MovingComponent>

              <MovingComponent
                type="unfold"
                duration="1000ms"
                delay="0s"
                direction="normal"
                timing="ease"
                iteration="1"
                fillMode="none">
                <h4>MODEL 92 FS INOX</h4>
              </MovingComponent>

              <MovingComponent
                type="popIn"
                duration="1000ms"
                delay="0s"
                direction="normal"
                timing="ease"
                iteration="1"
                fillMode="none">
                <h3>$370.00</h3>
              </MovingComponent>
              <Button butonunIcindekiDeyer="SHOP NOW" klasAdi="cg-button" />
            </div>
          </div></SwiperSlide>
        <SwiperSlide>
          <div className="steiner">
            <div className="steiner-img">
              <img src="https://res.cloudinary.com/dmqymruko/image/upload/v1687769668/binocular_ciyuij.jpg" alt="" />
            </div>
            <div className="steiner-text">
              <h1>STEINER</h1>


              <h4>AZ830 BINOCULAR</h4>
              <h3>$370.00</h3>
              <Button butonunIcindekiDeyer="SHOP NOW" klasAdi="cg-button" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="special">
            <div className="special-img">
              <img src="https://res.cloudinary.com/dmqymruko/image/upload/v1687769677/special_pjxwl8.jpg" alt="" />
            </div>
            <div className="special-text">
              <h3>SPECIAL OFFER</h3>
              <h1>GET 25% OFF</h1>
              <h4>WHEN YOUR SPEND $500 <br /> ON HANDGUNS</h4>
              <Button butonunIcindekiDeyer="SHOP NOW" klasAdi="cg-button" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>



    </div>
  )
}

export default Categories