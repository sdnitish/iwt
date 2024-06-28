import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import BreadCrumb from '../components/BreadCrumb';
import '../Admin.css';
import SwitchBtn from '../components/SwitchBtn';
import TableCommon from '../components/TableCommon';
import DynamicTable from '../components/DynamicTable';
import DeleteBtn from '../components/DeleteBtn';

function Blogs() {

    const [blogs, setBlogs] = useState([]);

    const render = () => {
        getBlogs();
    }

    useEffect(() => {
        getBlogs();
    }, []);

    const getBlogs = async () => {
        let result = await fetch(process.env.REACT_APP_BASE_URL + "adminBlogs");
        result = await result.json();
        setBlogs(result);
    }

    const th = [
        { name: '#' },
        { name: 'Image' },
        { name: 'Name' },
        { name: 'Status' },
        { name: 'Action' }
    ];

    let td = [];
    if (blogs.status) {
        blogs.blogs.map((value, index) =>
            td.push(
                [
                    index + 1,
                    <img className='img-one' src={ process.env.REACT_APP_BASE_URL + "images/blogs/" + value.imgSmall} />,
                    value.blogTitle,
                    <SwitchBtn checked={value.isActive} url={process.env.REACT_APP_BASE_URL + "adminChangeActiveBlog/" + value._id} />,
                    <div className='d-flex gap-2 justify-content-center'>
                        <Link to={"/admin/blogs/data/" + value._id} className='btn btn-primary'>Edit</Link>
                        <DeleteBtn deleteAndRender={render} url={process.env.REACT_APP_BASE_URL + "adminDeleteBlog/" + value._id} />
                    </div>
                ]
            )
        )
    }

    return (
        <section className='admin_container'>
            <Nav />
            <div className='sidebar_with_content'>
                <div className='sidebar_box'>
                    <Sidebar />
                </div>
                <div className='content_box'>
                    <div className='content_container'>
                        <BreadCrumb pageName="Blogs" link="/admin/blogs/data" btnName="Add Product" />
                        <TableCommon tblData={<DynamicTable thData={th} tdData={td} />} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blogs