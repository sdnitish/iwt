import React from 'react';
import SectionTitle from '../SectionTitle';
import { Aoutoplay, Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
// import ProductCard from '../ProductCard';
import ProductCard from '../ProductCard';

const ProductSlider = () => {
  return (
    <>
      <section className='sect-space bg-gry'>
        <div className='container'>
            <div className='text-center'><SectionTitle  smTitle='Related Products' mainTitle="Cursus quis condimentum nunc ultricies " /></div>
            <div className=' m-t30'>
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
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    868: {
                      slidesPerView: 2,
                      spaceBetween: 40,
                    },
                    1224: {
                      slidesPerView: 3,
                      spaceBetween: 50,
                    },
                  }}
                modules={[Autoplay , Navigation]}
                className="home-slider">
                <SwiperSlide>
                  <ProductCard  productName="Product name one" />
                </SwiperSlide>
                <SwiperSlide>
                   <ProductCard  productName="Product name two" />
                </SwiperSlide>
                <SwiperSlide>
                   <ProductCard  productName="Product name three" />
                </SwiperSlide>
                <SwiperSlide>
                   <ProductCard  productName="Product name four" />
                </SwiperSlide>
                <SwiperSlide>
                   <ProductCard  productName="Product name five" />
                </SwiperSlide>

            </Swiper>
            </div>
        </div>
      </section>
    </>
  )
}

export default ProductSlider
