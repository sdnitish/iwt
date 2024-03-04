import React from 'react';
import SectionTitle from '../SectionTitle';
import ProductCard from '../ProductCard';

const HomeBanner = () => {
  return (
    <section className='sect-space bg-gry'>
      <div className='container'>
        <div className='text-center m-b40'>
            <SectionTitle smTitle="All Products" mainTitle="Tristique ultricies malesuada dictum posuere" />
        </div>
        <div className='row'>
            <div className=' col-lg-4 col-md-6 m-b30'><ProductCard productName="Product name one" /></div>
            <div className=' col-lg-4 col-md-6 m-b30'><ProductCard productName="Product name two" /></div>
            <div className=' col-lg-4 col-md-6 m-b30'><ProductCard productName="Product name three" /></div>
            <div className=' col-lg-4 col-md-6 m-b30'><ProductCard productName="Product name four" /></div>
            <div className=' col-lg-4 col-md-6 m-b30'><ProductCard productName="Product name five" /></div>
            <div className=' col-lg-4 col-md-6 m-b30'><ProductCard productName="Product name six" /></div>
        </div>
      </div>
    </section>
  )
}

export default HomeBanner
