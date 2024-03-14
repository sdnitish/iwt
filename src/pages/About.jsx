import React from 'react';
import CompanyProfile from '../components/sections/CompanyProfile';
import BreadCrumb from '../components/sections/BreadCrumb';
import ContactSect from '../components/sections/ContactSect';
import SitemapSect from '../components/sections/SitemapSect';
import ProductSlider from '../components/sections/ProductSlider';
import ProductDetailSect from '../components/sections/ProductDetailSect';
import {Helmet} from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
                <meta charSet="utf-8" />
                <title>About Page</title>
      </Helmet>
      <BreadCrumb pageName="About Us" />
      <CompanyProfile/>
      <ProductDetailSect />
      <ProductSlider />
      <ContactSect />
      <SitemapSect />
    </>
  )
}

export default About
