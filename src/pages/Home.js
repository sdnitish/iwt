import React from 'react';
import HomeBanner from '../components/sections/HomeBanner';
import FeaturesSect from '../components/sections/FeaturesSect';
import CompanyProfile from '../components/sections/CompanyProfile';
import ProductSlider from '../components/sections/ProductSlider';
import WelcomeText from '../components/sections/WelcomeText';
import WhyChoose from '../components/sections/WhyChoose';
import StepsSect from '../components/sections/StepsSect';
import Testimonial from '../components/sections/Testimonial';
import ContactSect from '../components/sections/ContactSect';
// import ProductSection from './components/sections/ProductSection';

const Home = () => {
  return (
    <>
    <HomeBanner />
    <WelcomeText />
    <ProductSlider />
    <CompanyProfile/>
    <FeaturesSect />
    <WhyChoose />
    <StepsSect />
    <Testimonial />
    <ContactSect />
    {/* <ProductSection /> */}
    </>
  )
}

export default Home
