import React, { useEffect, useState } from 'react';
import CompanyProfile from '../components/sections/CompanyProfile';
import BreadCrumb from '../components/sections/BreadCrumb';
import ContactSect from '../components/sections/ContactSect';
import HelmetComp from '../components/HelmetComp';

const About = () => {

  const [aboutData, setAboutData] = useState([]);

  useEffect(() => {
    getAboutData();
  }, []);

  const getAboutData = async () => {
    let result = await fetch(`${process.env.REACT_APP_BASE_URL}about`);
    result = await result.json();
    if (result.status) {
      setAboutData(result.about);
    }
  }

  return (
    <>
      <HelmetComp  metaData={aboutData} />
      <BreadCrumb name={aboutData.name} />
      <CompanyProfile pageData={aboutData}/>
      <ContactSect />
    </>
  )
}

export default About
