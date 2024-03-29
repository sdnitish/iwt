import React, { useState, useEffect } from 'react';
import Nav from '../components/nav/Nav';
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
import HelmetComp from '../components/HelmetComp';
import Footer from '../components/sections/Footer';

const Home = () => {

  const [homeData, setHomeData] = useState([]);

  useEffect(() => {
    getHomeData();
  }, []);

  const getHomeData = async () => {
    let result = await fetch(`${process.env.REACT_APP_BASE_URL}home`);
    result = await result.json();
    if (result.status) {
      setHomeData(result.home);
    }
  }

  return (
    <>
      <HelmetComp metaData={homeData} />
      <Nav />
      <HomeBanner />
      <WelcomeText />
      <ProductSlider />
      <CompanyProfile pageData={homeData} />
      <FeaturesSect />
      <WhyChoose />
      <StepsSect />
      <Testimonial />
      <ContactSect />
      {/* <ProductSection /> */}
      <Footer />
    </>
  )
}

export default Home
