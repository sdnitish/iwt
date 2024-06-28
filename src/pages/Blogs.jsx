import React, { useEffect, useState } from 'react'
import Nav from '../components/nav/Nav';
import BreadCrumb from '../components/sections/BreadCrumb'
import BlogsSect from '../components/sections/BlogsSect';
import ProductSlider from '../components/sections/ProductSlider';
import ContactSect from '../components/sections/ContactSect'
import HelmetComp from '../components/HelmetComp';
import Footer from '../components/sections/Footer';
import { useParams } from 'react-router-dom';

const Blogs = (props) => {

  const [product, setProduct] = useState([]);
  const param = useParams();

  useEffect(() => {
    getProduct();
  }, [param]);

  const getProduct = async () => {
    let result = await fetch(`${process.env.REACT_APP_BASE_URL}product/${props.slug}`);
    result = await result.json();
    if (result.status) {
      setProduct(result.product);
    }
  }

  return (
    <>
      <HelmetComp metaData={product}></HelmetComp>
      <Nav />
      <BreadCrumb name="Blogs" />
      <BlogsSect />
      <ContactSect />
      <Footer />
    </>
  )
}

export default Blogs
