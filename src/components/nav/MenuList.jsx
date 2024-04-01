import React, {useEffect, useState} from 'react';
import { Link} from 'react-router-dom';
import HasChildMenu from './HasChildMenu';
import ChildMenu from './ChildMenu';

const MenuList = (props) => {

    const closeMenu = () => {
        props.closeMenu(false);
    };

    const webDevelopment = [
        {
            childGif:"./images/gif/Website-Designing-f.gif",
            childName:"Service name lorem"
        },
        {
            childGif:"./images/gif/Website-Designing-f.gif",
            childName:"Service name lorem"
        },
        {
            childGif:"./images/gif/Website-Designing-f.gif",
            childName:"Service name lorem"
        },
        {
            childGif:"./images/gif/Website-Designing-f.gif",
            childName:"Service name lorem"
        }
    ];
    
    const webDesign = [
        {
            childGif:"./images/gif/Website-Designing-f.gif",
            childName:"Service name lorem"
        },
        {
            childGif:"./images/gif/Website-Designing-f.gif",
            childName:"Service name lorem"
        },
        {
            childGif:"./images/gif/Website-Designing-f.gif",
            childName:"Service name lorem"
        },
        {
            childGif:"./images/gif/Website-Designing-f.gif",
            childName:"Service name lorem"
        }
    ];

    return (
        <ul>
            <li className='active'><Link onClick={closeMenu} to="/"><img className='menu-gif' src={process.env.REACT_APP_BASE_URL + "images/gif/Home-Icon.gif"} alt="" /><span>Home</span></Link></li>
            <HasChildMenu 
            closeMenu={closeMenu}
            servGif={process.env.REACT_APP_BASE_URL + "images/gif/Website-Designing.gif"}
            servName="Web Development" 
            servChild={<ChildMenu closeMenu={closeMenu} servChild={webDevelopment} />}
             />
            <HasChildMenu 
            closeMenu={closeMenu}
            servGif={process.env.REACT_APP_BASE_URL + "images/gif/Website-Development.gif"}
            servName="Web Designing" 
            servChild={<ChildMenu closeMenu={closeMenu} servChild={webDesign} />}
             />
            <li ><Link onClick={closeMenu} to="/company-profile"><img className='menu-gif' src={process.env.REACT_APP_BASE_URL + "images/gif/Company-Profile.gif"} alt="" /> <span>Company Profile</span> </Link></li>

            <li ><Link onClick={closeMenu} to="/contact"><img className='menu-gif' src={process.env.REACT_APP_BASE_URL + "images/gif/contact.gif"} alt="" /> <span>Contact</span> </Link></li>
        </ul>
    )
}

export default MenuList
