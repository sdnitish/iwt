import React from 'react'
import { Helmet } from "react-helmet";

const HelmetComp = (props) => {
    return (
        <Helmet>
            <link href={'./images/' + props.metaData.favicon} rel="shortcut icon" type="image/png" />
            <title>{props.metaData.metaTitle}</title>
            <meta name="keywords" content={props.metaData.metaKeywords} />
            <meta name="description" content={props.metaData.metaDescription} />
        </Helmet>
    )
}

export default HelmetComp
