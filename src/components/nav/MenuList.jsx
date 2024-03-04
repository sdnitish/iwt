import React from 'react';
import { useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import HasChildMenu from './HasChildMenu';

const MenuList = () => {

    // const [isOpenChild, setIsopenChild] = useState(false);
    // const toggleDropdownChild = () => {
    //     setIsopenChild(!isOpenChild);
    // }

    return (
        <ul>
            <li className='active'><Link to="/"><img className='menu-gif' src="./images/gif/Home-Icon-f.gif" alt="" /><span>Home</span></Link></li>
            <li className=''><Link to="/"><img className='menu-gif' src="./images/gif/Website-Designing-f.gif" alt="" /> <span>Web Development</span> </Link></li>
            <li className=''><Link to="/"><img className='menu-gif' src="./images/gif/Website-Development.gif" alt="" /> <span>Web Designing</span> </Link></li>
            <li className=''><Link to="/"><img className='menu-gif' src="./images/gif/Company-Profile-f.gif" alt="" /> <span>Company Profile</span> </Link></li>
            <li className=''><Link to="/"><img className='menu-gif' src="./images/gif/Seo-f.gif" alt="" /> <span>Seo</span> </Link></li>
            {/* <HasChildMenu /> */}
            {/* <li><Link to="/sitemap">Sitemap</Link></li>
            <li><Link to="/about">Company Profile</Link></li>
            <li><Link to="/contact">Contact Us</Link></li> */}
        </ul>
    )
}

export default MenuList
