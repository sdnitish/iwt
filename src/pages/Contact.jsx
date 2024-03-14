import React from 'react'
import BreadCrumb from '../components/sections/BreadCrumb'
import ContactSect from '../components/sections/ContactSect'
import { Helmet } from "react-helmet";

const Contact = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contact Page</title>
            </Helmet>
            <BreadCrumb pageName="Contact Us" />
            <ContactSect />
        </>
    )
}

export default Contact
