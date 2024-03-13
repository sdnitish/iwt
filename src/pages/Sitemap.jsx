import React from 'react'
import BreadCrumb from '../components/sections/BreadCrumb'
import SitemapSect from '../components/sections/SitemapSect'
import ContactSect from '../components/sections/ContactSect'

const Sitemap = () => {
  return (
    <>
      <BreadCrumb pageName="Sitemap" />
      <SitemapSect />
      <ContactSect />
    </>
  )
}

export default Sitemap
