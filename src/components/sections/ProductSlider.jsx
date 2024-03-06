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
              navigation={{
                prevEl: '.prev-slide',
                nextEl: '.next-slide',
              }}
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
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1224: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
              modules={[Autoplay, Navigation]}
              className="home-slider">
              <SwiperSlide>
                <ProductCard productName="Service Name"
                  servDesc="Conubia praesent ad auctor hac non morbi ad hac platea. Tincidunt ex cubilia urna tempus; natoque rhoncus sit. Habitasse justo lacinia ac senectus fusce sem nunc scelerisque maximus"
                  servPrice="80, 0000"
                  servLink="#"
                  servIcon="./images/gif/Website-Development.gif"
                />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard productName="Service Name"
                  servDesc="Conubia praesent ad auctor hac non morbi ad hac platea. Tincidunt ex cubilia urna tempus; natoque rhoncus sit. Habitasse justo lacinia ac senectus fusce sem nunc scelerisque maximus"
                  servPrice="80, 0000"
                  servLink="#"
                  servIcon="./images/gif/Website-Development.gif"
                />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard productName="Service Name"
                  servDesc="Conubia praesent ad auctor hac non morbi ad hac platea. Tincidunt ex cubilia urna tempus; natoque rhoncus sit. Habitasse justo lacinia ac senectus fusce sem nunc scelerisque maximus"
                  servPrice="80, 0000"
                  servLink="#"
                  servIcon="./images/gif/Website-Development.gif"
                />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard productName="Service Name"
                  servDesc="Conubia praesent ad auctor hac non morbi ad hac platea. Tincidunt ex cubilia urna tempus; natoque rhoncus sit. Habitasse justo lacinia ac senectus fusce sem nunc scelerisque maximus"
                  servPrice="80, 0000"
                  servLink="#"
                  servIcon="./images/gif/Website-Development.gif"
                />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard productName="Service Name"
                  servDesc="Conubia praesent ad auctor hac non morbi ad hac platea. Tincidunt ex cubilia urna tempus; natoque rhoncus sit. Habitasse justo lacinia ac senectus fusce sem nunc scelerisque maximus"
                  servPrice="80, 0000"
                  servLink="#"
                  servIcon="./images/gif/Website-Development.gif"
                />
              </SwiperSlide>

            </Swiper>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductSlider
