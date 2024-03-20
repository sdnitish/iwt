import React from 'react'
import BreadCrumb from '../components/sections/BreadCrumb'
import ContactSect from '../components/sections/ContactSect'
import ProductSection from '../components/sections/ProductSection';
// import HelmetComp from '../components/HelmetComp';

const Products = () => {
  return (
    <>
      <BreadCrumb name="All Services" />
      <ProductSection />
      <ContactSect />
    </>
  )
}

export default Products
