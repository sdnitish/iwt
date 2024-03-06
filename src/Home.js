import React from 'react';
import HomeBanner from './components/sections/HomeBanner';
import FeaturesSect from './components/sections/FeaturesSect';
import CompanyProfile from './components/sections/CompanyProfile';
import ProductSlider from './components/sections/ProductSlider';
import WelcomeText from './components/sections/WelcomeText';
import ProductSection from './components/sections/ProductSection';
import WhyChoose from './components/sections/WhyChoose';
import ContactSect from './components/sections/ContactSect';
import Testimonial from './components/sections/Testimonial';

const Home = () => {
  return (
    <>
    <HomeBanner />
    <WelcomeText />
    <ProductSlider />
    <CompanyProfile/>
    <FeaturesSect />
    {/* <ProductSection /> */}
    {/* <WhyChoose /> */}
    {/* <Testimonial /> */}
    {/* <ContactSect /> */}
    </>
  )
}

export default Home
