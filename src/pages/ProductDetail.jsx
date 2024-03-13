import React from 'react'
import BreadCrumb from '../components/sections/BreadCrumb'
import ProductDetailSect from '../components/sections/ProductDetailSect'
import ProductSlider from '../components/sections/ProductSlider';
import ContactSect from '../components/sections/ContactSect'

const ProductDetail = () => {
  return (
    <>
      <BreadCrumb pageName="Product Details" />
      <ProductDetailSect />
      <ProductSlider />
      <ContactSect />
    </>
  )
}

export default ProductDetail
