import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import BreadCrumb from '../components/BreadCrumb';
import '../Admin.css';
import './Banner.css';
import SwitchBtn from '../components/SwitchBtn';
import TableCommon from '../components/TableCommon';
import DynamicTable from '../components/DynamicTable';
import DeleteBtn from '../components/DeleteBtn';

function ParantLocation() {

    const [parantLocations, setParantLocation] = useState([]);

    const render = () => {
        getParantLocations();
    }

    useEffect(() => {
        getParantLocations();
    }, []);

    const getParantLocations = async () => {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}admin/parantLocations`);
        result = await result.json();
        if (result.status) {
            setParantLocation(result.parantLocations);
        }
    }

    const th = [
        { name: '#' },
        { name: 'Name' },
        { name: 'Status' },
        { name: 'Action' }
    ];

    let td = [];
    parantLocations.map((value, index) =>
        td.push(
            [
                index + 1,
                value.name,
                <SwitchBtn checked={value.isActive} url={process.env.REACT_APP_BASE_URL + "admin/changeActiveParantLocation/" + value._id} />,
                <div className='d-flex gap-2 justify-content-center'>
                    <Link to={"/admin/parantLocation/data/" + value._id} className='btn btn-primary'>Edit</Link>
                    <DeleteBtn deleteAndRender={render} url={process.env.REACT_APP_BASE_URL + "admin/deleteParantLocation/" + value._id} />
                </div>
            ]
        )
    )

    return (
        <section className='admin_container'>
            <Nav />
            <div className='sidebar_with_content'>
                <div className='sidebar_box'>
                    <Sidebar />
                </div>
                <div className='content_box'>
                    <div className='content_container'>
                        <BreadCrumb pageName="Parant Locations" link="/admin/parantLocation/data" btnName="Add Parant Location" />
                        <TableCommon tblData={<DynamicTable thData={th} tdData={td} />} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ParantLocation