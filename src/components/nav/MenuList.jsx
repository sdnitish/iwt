import React from 'react';
// import { useState } from 'react';
import { Link} from 'react-router-dom';
import HasChildMenu from './HasChildMenu';
import ChildMenu from './ChildMenu';

const MenuList = () => {

    // const [isOpenChild, setIsopenChild] = useState(false);
    // const toggleDropdownChild = () => {
    //     setIsopenChild(!isOpenChild);
    // }

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
            <li className='active'><Link to="/"><img className='menu-gif' src="./images/gif/Home-Icon-f.gif" alt="" /><span>Home</span></Link></li>
            <HasChildMenu 
            servGif="./images/gif/Website-Designing-f.gif"
            servName="Web Development" 
            servChild={<ChildMenu servChild={webDevelopment} />}
             />
            <HasChildMenu 
            servGif="./images/gif/Website-Development.gif"
            servName="Web Designing" 
            servChild={<ChildMenu servChild={webDesign} />}
             />
            <li className=''><Link to="/"><img className='menu-gif' src="./images/gif/Company-Profile-f.gif" alt="" /> <span>Company Profile</span> </Link></li>
            <li className=''><Link to="/"><img className='menu-gif' src="./images/gif/Seo-f.gif" alt="" /> <span>Seo</span> </Link></li>
        </ul>
    )
}

export default MenuList
