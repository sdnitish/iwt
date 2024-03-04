import React, { useRef, useState } from 'react';
import {  Swiper, SwiperSlide } from 'swiper/react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

const HomeBanner = () => {
    return (
        <>
            <Swiper
                loop={true}
                speed={1000}
                autoplay={{
                    delay: 6500,
                    disableOnInteraction: false,
                }}
                // navigation={true}
                navigation={{
                    prevEl: '.prev-slide',
                    nextEl: '.next-slide',
                  }}
                modules={[Autoplay , Navigation]}
                className="home-slider">
                <SwiperSlide><img className='w-100' loading='lazy' src='images/slider/ban1.jpg' alt='' /></SwiperSlide>
                <SwiperSlide><img className='w-100' loading='lazy' src='images/slider/ban2.jpg' alt='' /></SwiperSlide>
                <SwiperSlide><img className='w-100' loading='lazy' src='images/slider/ban1.jpg' alt='' /></SwiperSlide>
                <div className="prev-slide slide-btn"><span><ArrowForwardIcon /></span></div>
                <div className="next-slide slide-btn"><span><ArrowBackIcon /></span></div>
            </Swiper>
        </>
    )
}

export default HomeBanner
