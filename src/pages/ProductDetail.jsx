import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BreadCrumb from '../components/sections/BreadCrumb'
import ProductDetailSect from '../components/sections/ProductDetailSect'
import ProductSlider from '../components/sections/ProductSlider';
import ContactSect from '../components/sections/ContactSect'
import HelmetComp from '../components/HelmetComp';

const ProductDetail = () => {
  
  const params = useParams();

  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    let result = await fetch(`${process.env.REACT_APP_BASE_URL}product/${params.slug}`);
    result = await result.json();
    if (result.status) {
      setProduct(result.product);
    }
  }

  return (
    <>
      <HelmetComp metaData={product}></HelmetComp>
      <BreadCrumb name={product.name} />
      <ProductDetailSect />
      <ProductSlider />
      <ContactSect />
    </>
  )
}

export default ProductDetail
