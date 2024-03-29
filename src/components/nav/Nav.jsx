import React from 'react';
import { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
import './Nav.css';
import MenuList from './MenuList';
import Socials from './Socials';
// import BtnLink from '../BtnLink';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';

const Nav = () => {

    const [isOpen, setIsopen] = useState(false);
    const [siteInfo, setSiteInfo] = useState([]);
    // const {pathname} = useLocation();
    const toggleSidenav = () => {
        setIsopen(!isOpen);
    }
    
    useEffect(() => {
        getSiteInfo();
    }, [])

    const getSiteInfo = async () => {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}siteInfo`);
        result = await result.json();
        if (result.status) {
            setSiteInfo(result.siteInfo);
        }
    }
    // Close the navigation panel
    // useEffect(() => {
    //     setIsopen(!isOpen); 
    // }, [ pathname ]);

    return (
        <>
            <header className="Header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="header-topbar-content">
                                {/* socials */}
                                <div className="cstm-socials">
                                    <Socials data={siteInfo} />
                                </div>

                                <div className="cstm-contact-infos">
                                    <ul>
                                    <li><PermPhoneMsgIcon /><a href={"tel:" + siteInfo.primaryPhone}>{siteInfo.primaryPhone}</a></li>
                                        <li><ForwardToInboxIcon /><a href={"mailto:" + siteInfo.primaryMail}>{siteInfo.primaryMail}</a>
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
                                <div className='logo-box'>
                                  <Link to={'/'}><img src={'./images/' + siteInfo.logo} alt={siteInfo.compName} title={siteInfo.compName} /></Link>
                                </div>
                                {/* <div className='col-1'></div> */}
                                <div className='Mainmenu'>
                                    {/* menu list appear here */}
                                    <MenuList closeMenu={setIsopen} />
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
                    <div className='logo-box'> 
                    <Link to={'/'}><img src={'./images/' + siteInfo.logo} alt={siteInfo.compName} title={siteInfo.compName} /></Link>
                    </div>
                    {/* menu list appear here for mobile*/}
                    <MenuList closeMenu={setIsopen} />
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
