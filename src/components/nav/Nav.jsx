import React from 'react';
import { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
import './Nav.css';
import MenuList from './MenuList';
import Socials from './Socials';
// import BtnLink from '../BtnLink';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';

const Nav = () => {

    const [isOpen, setIsopen] = useState(false);
    // const {pathname} = useLocation();
    const toggleSidenav = () => {
        setIsopen(!isOpen);
    }


    return (
        <>
            <header className="Header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="header-topbar-content">
                                {/* socials */}
                                <div className="cstm-socials"><Socials /></div>

                                <div className="cstm-contact-infos">
                                    <ul>
                                        <li><PermPhoneMsgIcon /><a href="">+91 00000 0000</a></li>
                                        <li><ForwardToInboxIcon /><a href="">mail@company.com</a>
                                        </li>
                                    </ul>
                                </div>
                                {/* <BtnLink Href="" addClass='' btnName="Request Quote" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <nav className='Navbar'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='mainmenu-wrapper'>
                                <div className='logo-box'> <a href=''><img src='./images/logo.png' alt='' /></a> </div>
                                {/* <div className='col-1'></div> */}
                                <div className='Mainmenu'>
                                    {/* menu list appear here */}
                                    <MenuList />
                                </div>
                                <span onClick={toggleSidenav} className='menuBtn'><i className="fa-solid fa-bars-staggered"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='menu-shape-top'>
                    <img src="../images/shapes/cloud-menu.png" alt="" />
                </div>
                <div className='menu-shape-botm'>
                    {/* <img src="../images/shapes/paper-cut.png" alt="" /> */}
                </div>
            </nav>
            {/* menu for mobile*/}
            <div className={isOpen ? 'phone-nav-overlay active' : 'phone-nav-overlay'}>
                <span onClick={toggleSidenav} className='close-nav'><i className="fa-solid fa-xmark"></i></span>
                <div className='phone-nav'>
                    <div className='logo-box'> <a href=''><img src='./images/logo.png' alt='' /></a> </div>
                    {/* menu list appear here for mobile*/}
                    <MenuList />
                </div>
                <div>
                    {/* socials */}
                    <div className="cstm-socials"><Socials /></div>
                </div>
            </div>
        </>
    );

}


export default Nav
