import React from 'react'
import BreadCrumb from '../components/sections/BreadCrumb'
import ContactSect from '../components/sections/ContactSect'
import ProductSection from '../components/sections/ProductSection';

const Products = () => {
  return (
    <>
      <BreadCrumb pageName="All Services" />
      <ProductSection />
      <ContactSect />
    </>
  )
}

export default Products
