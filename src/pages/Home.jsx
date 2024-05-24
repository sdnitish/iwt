import React, { useState, useEffect, lazy, Suspense } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import Nav from '../components/nav/Nav';
import FeaturesSect from '../components/sections/FeaturesSect';
import StepsSect from '../components/sections/StepsSect';
import Testimonial from '../components/sections/Testimonial';
import ContactSect from '../components/sections/ContactSect';
import HelmetComp from '../components/HelmetComp';
import Footer from '../components/sections/Footer';
import PreLoader from '../components/PreLoader';
const WhyChoose = lazy(() => import('../components/sections/WhyChoose'));
const CompanyProfile = lazy(() => import('../components/sections/CompanyProfile'));
const ProductSlider = lazy(() => import('../components/sections/ProductSlider'));
const WelcomeText = lazy(() => import('../components/sections/WelcomeText'));
const HomeBanner = lazy(() => import('../components/sections/HomeBanner'));

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
      <Suspense fallback={<PreLoader />}>
        <HomeBanner />
      </Suspense>
      <Suspense fallback={<PreLoader />}>
        <WelcomeText />
      </Suspense>
      <Suspense fallback={<PreLoader />}>
        <ProductSlider />
      </Suspense>
      <Suspense fallback={<PreLoader />}>
        <CompanyProfile pageData={homeData} homeTitle={homeData.shortDescription} />
      </Suspense>
      <Suspense fallback={<PreLoader />}>
        <FeaturesSect />
        <WhyChoose />
        <StepsSect />
        <Testimonial />
        <ContactSect />
        <Footer />
      </Suspense>

    </>
  )
}

export default Home
