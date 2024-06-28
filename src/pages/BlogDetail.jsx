import React, { useEffect, useState } from 'react'
import Nav from '../components/nav/Nav';
import BreadCrumb from '../components/sections/BreadCrumb'
import ProductSlider from '../components/sections/ProductSlider';
import ContactSect from '../components/sections/ContactSect'
import HelmetComp from '../components/HelmetComp';
import Footer from '../components/sections/Footer';
import { useParams } from 'react-router-dom';
import BlogDetailSect from '../components/sections/BlogDetailSect';

const BlogDetail = (props) => {

  const [blogs, setBlogs] = useState([]);
  const param = useParams();

  useEffect(() => {
    getBlogs();
  }, [param]);

  const getBlogs = async () => {
    let result = await fetch(`${process.env.REACT_APP_BASE_URL}blogsData/${props.slug}`);
    result = await result.json();
    if (result.status) {
      setBlogs(result.blogs);
    }
  }

  return (
    <>
      <HelmetComp metaData={blogs}></HelmetComp>
      <Nav />
      <BreadCrumb name={blogs.blogTitle} />
      <BlogDetailSect blogs={blogs} hTwoTitle={blogs.shortDescription}/>
      <ContactSect />
      <Footer />
    </>
  )
}

export default BlogDetail
