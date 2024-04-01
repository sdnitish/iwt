import React, { useEffect, useState } from 'react';
import { Parser } from 'html-to-react'
import SectionTitle from '../SectionTitle';
import ProductCard from '../ProductCard';
import { TypeAnimation } from 'react-type-animation';

const ProductSection = () => {
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
        {
            products
              ?
              products.map((value, index) =>
              <div key={index} className=' col-lg-3 col-md-4 col-sm-6 m-b30'>
              <ProductCard 
                productName={value.name}
                servDesc={Parser().parse(value.description)}
                servPrice={value.price}
                servLink={'/'+value.slug}
                servIcon={value.icon}
              />
            </div>
              )
              :
              null
          }

        </div>
      </div>
    </section>
  )
}

export default ProductSection
