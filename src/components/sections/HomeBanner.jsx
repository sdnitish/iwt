import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
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

    const [banners, setBanner] = useState([]);

    useEffect(() => {
        getBanners();
    }, []);

    const getBanners = async () => {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}banners`);
        result = await result.json();
        if (result.status) {
            setBanner(result.banners);
        }
    }

    return (
        <>
            <Swiper
                loop={true}
                speed={1000}
                autoplay={{
                    delay: 6500,
                    disableOnInteraction: false,
                }}
                navigation={{
                    prevEl: '.prev-slide',
                    nextEl: '.next-slide',
                }}
                modules={[Autoplay, Navigation]}
                className="home-slider hero-slide-h">
                {
                    banners
                        ?
                        banners.map((value, index) =>
                            <SwiperSlide key={index}>
                                <img className='w-100' src={process.env.REACT_APP_BASE_URL + 'images/banners/' + value.img} alt={value.name} title={value.name} />
                            </SwiperSlide>
                        )
                        :
                        null
                }
                <div className="prev-slide slide-btn"><span><ArrowBackIcon /></span></div>
                <div className="next-slide slide-btn"><span><ArrowForwardIcon /></span></div>
            </Swiper>
        </>
    )
}

export default HomeBanner
