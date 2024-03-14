import React from 'react'
import BreadCrumb from '../components/sections/BreadCrumb'
import ProductDetailSect from '../components/sections/ProductDetailSect'
import ProductSlider from '../components/sections/ProductSlider';
import ContactSect from '../components/sections/ContactSect'
import {Helmet} from "react-helmet";

const ProductDetail = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Product Detail Page</title>
      </Helmet>
      <BreadCrumb pageName="Product Details" />
      <ProductDetailSect />
      <ProductSlider />
      <ContactSect />
    </>
  )
}

export default ProductDetail
