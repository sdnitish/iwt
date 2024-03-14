import React from 'react'
import BreadCrumb from '../components/sections/BreadCrumb'
import SitemapSect from '../components/sections/SitemapSect'
import ContactSect from '../components/sections/ContactSect'
import {Helmet} from "react-helmet";

const Sitemap = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sitemap Page</title>
      </Helmet>
      <BreadCrumb pageName="Sitemap" />
      <SitemapSect />
      <ContactSect />
    </>
  )
}

export default Sitemap
