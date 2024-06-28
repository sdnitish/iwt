import React, { useEffect, useState } from 'react';
import './BlogsSect.css';
import { Link } from 'react-router-dom';
import BtnLink from '../BtnLink';
import { Parser } from 'html-to-react'
import SectionTitle from '../SectionTitle';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


const BlogsSect = (props) => {

    // const [isOpen, setOpen] = useState(false);
    // const [siteInfo, setSiteInfo] = useState([]);
    const [blogs, setBlogs] = useState([]);

    // const boxVariant = {
    //     visible: { opacity: 1, scale: 1, translateX: 0, transition: { duration: 0.5 } },
    //     hidden: { opacity: 0.25, scale: 0.85, translateX: -180 },
    // }

    // const control = useAnimation()
    // const [ref, inView] = useInView()
    useEffect(() => {
        // getSiteInfo();
        getBlogs();
        // if (inView) {
        //     control.start("visible");
        // }
        // else {
        //     control.start("hidden");
        // }
    });

    // const getSiteInfo = async () => {
    //     let result = await fetch(`${process.env.REACT_APP_BASE_URL}siteInfo`);
    //     result = await result.json();
    //     if (result.status) {
    //         setSiteInfo(result.siteInfo);
    //     }
    // }

    const getBlogs = async () => {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}blogsData`);
        result = await result.json();
        if (result.status) {
            setBlogs(result.blogs);
        }
    }

    return (
        <>

            <section className="sect-space bg-gry">
                <div className="container">
                    <div className="row">
                        {
                            blogs
                                ?
                                blogs.map((value, index) =>
                                    <div key={index} className="col-lg-4 col-md-6 ">
                                        <div className="blogs-card">
                                            <img className='w-100' src={process.env.REACT_APP_BASE_URL + "images/blogs/" + value.imgSmall} alt={value.blogTitle} title={value.blogTitle} />
                                            <div className="admin-post-date">
                                                <span>< AccountCircleIcon /> By {value.admin}</span>
                                                <span><CalendarMonthIcon /> {value.date}</span>
                                            </div>
                                            <Link to={"/"+ value.slug} className="blog-card-title">{value.blogTitle}</Link>
                                            <BtnLink Href={"/"+ value.slug} addClass="btn-blog" btnName="Read More" />
                                            <img className='blog-vector' src={process.env.REACT_APP_BASE_URL +"images/img/blog-shape.svg"} alt="blog-vector" title='blog-vector' />
                                        </div>
                                    </div>
                                )
                                :
                                null
                        }

                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogsSect
