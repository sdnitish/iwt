import React, { useEffect, useState } from 'react'
import { Helmet } from "react-helmet";
import { Parser } from 'html-to-react'

const HelmetComp = (props) => {

    const [siteInfo, setSiteInfo] = useState([]);

    const getSiteInfo = async () => {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}siteInfo`);
        result = await result.json();
        if (result.status) {
            setSiteInfo(result.siteInfo);
        }
    }

    useEffect(() => {
        getSiteInfo();
    }, []);

    return (
        <Helmet>
            <link href={process.env.REACT_APP_BASE_URL + 'images/' + siteInfo.favicon} rel="shortcut icon" type="image/png" />
            {Parser().parse(siteInfo.googleAnalytic)}
            <title>{props.metaData.metaTitle}</title>
            <meta name="keywords" content={props.metaData.metaKeywords} />
            <meta name="description" content={props.metaData.metaDescription} />
        </Helmet>
    )
}

export default HelmetComp
