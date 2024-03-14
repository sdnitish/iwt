import React from 'react'
import BreadCrumb from '../components/sections/BreadCrumb'
import ContactSect from '../components/sections/ContactSect'
import ProductSection from '../components/sections/ProductSection';
import {Helmet} from "react-helmet";

const Products = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>All Services Page</title>
      </Helmet>
      <BreadCrumb pageName="All Services" />
      <ProductSection />
      <ContactSect />
    </>
  )
}

export default Products
