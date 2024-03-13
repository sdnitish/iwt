import React from 'react';
import { Link} from 'react-router-dom';
import './Footer.css';
// import Socials from '../nav/Socials';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import ShareIcon from '@mui/icons-material/Share';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

import ScrollToTop from 'react-scroll-to-top';

const actions = [
    { icon: <PhoneForwardedIcon />, name: 'Call Now', href: 'tel:91000000000' },
    { icon: <ForwardToInboxIcon />, name: 'Mail Now', href: 'mailto:email@email.com' },
    { icon: <WhatsAppIcon />, name: 'Whatsapp', href: 'https://api.whatsapp.com/send/?phone=9899978293' },
    { icon: <ShareIcon />, name: 'Share', href: '' },
];

const Footer = () => {
    return (
        <>
            <footer>
                <div className='Footer-top'>
                    <div className='container'></div>
                </div>
                <div className='footer-main'>
                    <div className="btm-layer"></div>
                    <div className="btm-layer2"></div>
                    <div className="btm-layer3">
                        <img src="./images/bg/web-development.gif" alt="" />
                    </div>
                    <div className='container'>
                        <div className='row justify-content-between'>
                            <div className='col-lg-5 col-md-6'>
                                <div className='ft-logo-box'>
                                    <a href="#" className='ft-logo'>
                                        {/* <img src="./images/logo.png" alt="" /> */}
                                        {/* Valvetek Engineering */}
                                    </a>
                                    {/* <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Suspendisse efficitur sit ut nullam egestas imperdiet netus? Rhoncus odio laoreet nisi aliquet per dui augue. Sollicitudin cras dictum ligula neque convallis laoreet, iaculis duis! Maecenas proin tincidunt tempus eget nec parturient luctus aliquet litora. Gravida curabitur maximus, conubia vivamus netus orci habitant fusce.</p>
                                    <a className='read-more-btn' href="#">Readmore <span className='line'></span> <i className="fa-solid fa-angle-right"></i></a> */}

                                    {/* Social links */}
                                    {/* <Socials /> */}
                                </div>
                            </div>
                            <div className='col-lg-2 col-md-6 m-t40'>
                                <div className='footer-widget'>
                                    <p className='title-ft'>Useful Links</p>
                                    <ul className='links'>
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/services">Services</Link></li>
                                        <li><Link to="/about">Company Profile</Link></li>
                                        <li><Link to="/sitemap">Sitemap</Link></li>
                                        <li><Link to="/sitemap">Market Place</Link></li>
                                        <li><Link to="/contact">Contact Us</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 m-t40'>
                                <div className='footer-widget'>
                                    <p className='title-ft'>Contact Info</p>

                                    <div className='contacts-box m-t30'>
                                        <div className='cont-icn'><i className="fa-solid fa-phone-volume"></i></div>
                                        <div className='conta-links'>
                                            <span className='title'>Phone</span>
                                            <a href="#">+91 0000 00000</a>
                                        </div>
                                    </div>
                                    <div className='contacts-box'>
                                        <div className='cont-icn'><i className="fa-solid fa-envelope-open-text"></i></div>
                                        <div className='conta-links'>
                                            <span className='title'>Email</span>
                                            <a href="#">contact@company.com</a>
                                        </div>
                                    </div>
                                    <div className='contacts-box'>
                                        <div className='cont-icn'><i className="fa-solid fa-map-location-dot"></i></div>
                                        <div className='conta-links'>
                                            <span className='title'>Address</span>
                                            <span>456, Loandon Street, lorem tisuml, 33454, India</span>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='copy-box'>
                        <div className='container'>
                            <div className='row justify-content-end'>
                                <div className='col-md-8 '>
                                    <div className='copy-right-text'><span>Copyright © 2024. All Rights Reserved.</span><a href="#">Company Name</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className='Scroll-top-btn'> <ScrollToTop smooth /></div>
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'fixed', bottom: 54, left: 26 }}
                icon={<AddIcCallIcon />}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        href={action.href}
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                    />
                ))}
            </SpeedDial>
        </>
    )
}

export default Footer
