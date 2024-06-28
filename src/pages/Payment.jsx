import React from 'react'
import Nav from '../components/nav/Nav';
import BreadCrumb from '../components/sections/BreadCrumb'
import PaymentSect from '../components/sections/PaymentSect';
import Footer from '../components/sections/Footer';

const Payment = () => {
    
    return (
        <>
            <Nav />
            <BreadCrumb name="Payment" />
            <PaymentSect />
            <Footer />
        </>
    )
}

export default Payment
