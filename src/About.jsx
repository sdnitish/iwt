import React from 'react';
import CompanyProfile from './components/sections/CompanyProfile';
import BreadCrumb from './components/sections/BreadCrumb';
import ContactSect from './components/sections/ContactSect';
import Sitemap from './components/sections/Sitemap';
import ProductSlider from './components/sections/ProductSlider';
import ProductDetailSect from './components/sections/ProductDetailSect';

const About = () => {
  return (
    <>
      <BreadCrumb />
      <CompanyProfile/>
      <ProductSlider />
      <ProductDetailSect />
      <ContactSect />
      <Sitemap />
    </>
  )
}

export default About
