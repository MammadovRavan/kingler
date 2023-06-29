import React from 'react'
import './Business.css'
import BusinessCard from './BusinessCard'
import MaplenecekElementler from '../BusinessCard.json'
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay} from "swiper";
const Business = () => {
    return (
        <div className="business-section">
                 <Swiper
        slidesPerView={3}
        spaceBetween={30}
        className="mySwiper"
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            360: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            576:{
                slidesPerView: 3,
                spaceBetween: 20,
            },
            880: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1230: {
              slidesPerView: 6,
              spaceBetween: 40,
            },
            1600: {
              slidesPerView: 7,
              spaceBetween: 50,
            },
          }}
      >
          {
                MaplenecekElementler.map(birmelumat => (
                    <SwiperSlide> <BusinessCard photo={birmelumat.img} /></SwiperSlide>
                ))
            }
       
       
      </Swiper>



        </div>
    )
}

export default Business