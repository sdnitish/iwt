import React, { useEffect, useState } from 'react';
import { Parser } from 'html-to-react'
import {  Swiper, SwiperSlide } from 'swiper/react';
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

  const [products, setProduct] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch(`${process.env.REACT_APP_BASE_URL}products`)
    result = await result.json();
    if (result.status) {
      setProduct(result.products);
    }
  }

  return (
    <>
      <section className='sect-space bg-gry pt-0 '>
        <div className='container'>
          <div className='text-center'>
            {/* <SectionTitle smTitle='Services' mainTitle={} /> */}
           </div>
          <div className=' m-t30'>
            <Swiper
              loop={true}
              speed={800}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              // navigation={true}
              // navigation={{
              //   prevEl: '.prev-slide',
              //   nextEl: '.next-slide',
              // }}
              breakpoints={{
                240: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                868: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1224: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
              modules={[Autoplay, Navigation]}
              className="home-slider">

{
            products
              ?
              products.map((value, index) =>
              <SwiperSlide key={index}>
                 <ProductCard 
                productName={value.name}
                servDesc={Parser().parse(value.description)}
                servPrice={value.price}
                servLink={'/'+value.slug}
                servIcon={value.icon}
                />
             </SwiperSlide>
              )
              :
              null
          }

            </Swiper>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductSlider
