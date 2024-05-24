import React, { useEffect, useState } from 'react';
import './BlogsSect.css';
import SectionTitle from '../SectionTitle';
import { Parser } from 'html-to-react'
import QuickHelpCard from '../QuickHelpCard';
import { Link } from 'react-router-dom';
import BtnLink from '../BtnLink';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const BlogDetailSect = (props) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        getBlogs();
    });

    const getBlogs = async () => {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}blogsData`);
        result = await result.json();
        if (result.status) {
            setBlogs(result.blogs);
        }
    }

    return (
        <section className='sect-space'>
            <div className='container'>
                <div className=''>

                    <div className="row">
                        <div className="col-lg-8 col-md-8 ">
                            <img className='w-100 mb-4' src={process.env.REACT_APP_BASE_URL + "images/blogsDetail/" + props.blogs.imgBig} alt={props.blogs.blogTitle} title={props.blogs.blogTitle} />
                            <SectionTitle smTitle="Blog Details" hTwoTitle={props.hTwoTitle} mainTitle={props.blogs.shortDescription} />
                            {Parser().parse(props.blogs.description)}
                            {Parser().parse(props.blogs.extraDescription)}
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <p className='rec-blog-titl'>Read More Related Blogs</p>
                            {
                                blogs
                                    ?
                                    blogs.map((value, index) =>
                                        <div key={index} className="recent-blogs">
                                            <div className="blogs-card">
                                                <img className='w-100 mb-0' src={process.env.REACT_APP_BASE_URL + "images/blogs/" + value.imgSmall} alt="" />
                                                <div className="blog-content-part">
                                                    <div className="admin-post-date">
                                                        <span>< AccountCircleIcon /> By {value.admin}</span>
                                                        <span><CalendarMonthIcon /> {value.date}</span>
                                                    </div>
                                                    <Link to={"/"+ value.slug} className="blog-card-title">{value.blogTitle}</Link>
                                                    <BtnLink Href={"/" + value.slug} addClass="btn-blog" btnName="Read More" />
                                                </div>

                                                {/* <img className='blog-vector' src={process.env.REACT_APP_BASE_URL + "images/img/blog-shape.svg"} alt="blog-vector" /> */}
                                            </div>
                                        </div>
                                    )
                                    :
                                    null
                            }

                            <QuickHelpCard />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogDetailSect
