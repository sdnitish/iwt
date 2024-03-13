import React from 'react';
import SectionTitle from '../SectionTitle';
import ProductCard from '../ProductCard';
import { TypeAnimation } from 'react-type-animation';

const HomeBanner = () => {
  return (
    <section className='sect-space bg-gry'>
      <div className='container'>
        <div className='text-center m-b40'>
          <SectionTitle smTitle="All Services" mainTitle={
          <TypeAnimation
            sequence={[
              'Welcome to Instant Web Technology Pvt. Ltd.',
              1000, 
              'Join us to get our most popular services',
              1000, 
              'Easily affordable prices',
              1000,
              'which brings your company on top of google',
              1000,
              'and helps you to build a big brand.',
              1000
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '34px', display: 'inline-block' }}
            repeat={Infinity}
          />} />
        </div>
        <div className='row'>
          <div className=' col-lg-3 col-md-4 col-sm-6 m-b30'>
            <ProductCard productName="Service Name"
              servDesc="Conubia praesent ad auctor hac non morbi ad hac platea. Tincidunt ex cubilia urna tempus; natoque rhoncus sit. Habitasse justo lacinia ac senectus fusce sem nunc scelerisque maximus"
              servPrice="80, 0000"
              servLink="#"
              servIcon="./images/gif/Website-Development.gif"
            />
          </div>
          <div className=' col-lg-3 col-md-4 col-sm-6 m-b30'>
            <ProductCard productName="Service Name"
              servDesc="Conubia praesent ad auctor hac non morbi ad hac platea. Tincidunt ex cubilia urna tempus; natoque rhoncus sit. Habitasse justo lacinia ac senectus fusce sem nunc scelerisque maximus"
              servPrice="90, 0000"
              servLink="#"
              servIcon="./images/gif/Website-Designing-f.gif"
            />
          </div>
          <div className=' col-lg-3 col-md-4 col-sm-6 m-b30'>
            <ProductCard productName="Service Name"
              servDesc="Conubia praesent ad auctor hac non morbi ad hac platea. Tincidunt ex cubilia urna tempus; natoque rhoncus sit. Habitasse justo lacinia ac senectus fusce sem nunc scelerisque maximus"
              servPrice="90, 0000"
              servLink="#"
              servIcon="./images/gif/Website-Designing-f.gif"
            />
          </div>
          <div className=' col-lg-3 col-md-4 col-sm-6 m-b30'>
            <ProductCard productName="Service Name"
              servDesc="Conubia praesent ad auctor hac non morbi ad hac platea. Tincidunt ex cubilia urna tempus; natoque rhoncus sit. Habitasse justo lacinia ac senectus fusce sem nunc scelerisque maximus"
              servPrice="90, 0000"
              servLink="#"
              servIcon="./images/gif/Website-Designing-f.gif"
            />
          </div>
          <div className=' col-lg-3 col-md-4 col-sm-6 m-b30'>
            <ProductCard productName="Service Name"
              servDesc="Conubia praesent ad auctor hac non morbi ad hac platea. Tincidunt ex cubilia urna tempus; natoque rhoncus sit. Habitasse justo lacinia ac senectus fusce sem nunc scelerisque maximus"
              servPrice="90, 0000"
              servLink="#"
              servIcon="./images/gif/Website-Designing-f.gif"
            />
          </div>
          <div className=' col-lg-3 col-md-4 col-sm-6 m-b30'>
            <ProductCard productName="Service Name"
              servDesc="Conubia praesent ad auctor hac non morbi ad hac platea. Tincidunt ex cubilia urna tempus; natoque rhoncus sit. Habitasse justo lacinia ac senectus fusce sem nunc scelerisque maximus"
              servPrice="90, 0000"
              servLink="#"
              servIcon="./images/gif/Website-Designing-f.gif"
            />
          </div>
          <div className=' col-lg-3 col-md-4 col-sm-6 m-b30'>
            <ProductCard productName="Service Name"
              servDesc="Conubia praesent ad auctor hac non morbi ad hac platea. Tincidunt ex cubilia urna tempus; natoque rhoncus sit. Habitasse justo lacinia ac senectus fusce sem nunc scelerisque maximus"
              servPrice="80, 0000"
              servLink="#"
              servIcon="./images/gif/Website-Development.gif"
            />
          </div>
          <div className=' col-lg-3 col-md-4 col-sm-6 m-b30'>
            <ProductCard productName="Service Name"
              servDesc="Conubia praesent ad auctor hac non morbi ad hac platea. Tincidunt ex cubilia urna tempus; natoque rhoncus sit. Habitasse justo lacinia ac senectus fusce sem nunc scelerisque maximus"
              servPrice="90, 0000"
              servLink="#"
              servIcon="./images/gif/Website-Designing-f.gif"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeBanner
