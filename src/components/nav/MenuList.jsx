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
            <li className='active'><Link onClick={closeMenu} to="/"><img className='menu-gif' src="./images/gif/Home-Icon-f.gif" alt="" /><span>Home</span></Link></li>
            <HasChildMenu 
            closeMenu={closeMenu}
            servGif="./images/gif/Website-Designing-f.gif"
            servName="Web Development" 
            servChild={<ChildMenu closeMenu={closeMenu} servChild={webDevelopment} />}
             />
            <HasChildMenu 
            closeMenu={closeMenu}
            servGif="./images/gif/Website-Development.gif"
            servName="Web Designing" 
            servChild={<ChildMenu closeMenu={closeMenu} servChild={webDesign} />}
             />
            <li ><Link onClick={closeMenu} to="/about"><img className='menu-gif' src="./images/gif/Company-Profile-f.gif" alt="" /> <span>Company Profile</span> </Link></li>
            <li ><Link onClick={closeMenu} to="/contact"><img className='menu-gif' src="./images/gif/Company-Profile-f.gif" alt="" /> <span>Contact</span> </Link></li>
            <li ><Link onClick={closeMenu} to="/"><img className='menu-gif' src="./images/gif/Seo-f.gif" alt="" /> <span>Seo</span> </Link></li>
        </ul>
    )
}

export default MenuList
