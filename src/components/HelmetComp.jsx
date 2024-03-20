import React from 'react'
import { Helmet } from "react-helmet";

const HelmetComp = (props) => {
    return (
        <Helmet>
            <title>{props.metaData.metaTitle}</title>
            <meta name="keywords" content={props.metaData.metaKeywords} />
            <meta name="description" content={props.metaData.metaDescription} />
        </Helmet>
    )
}

export default HelmetComp
