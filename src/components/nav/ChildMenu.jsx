import React from 'react'
import { Link } from 'react-router-dom';

const ChildMenu = (props) => {
    const closeMenu = () => {
        props.closeMenu(false);
    };
    return (

        props.servChild.map((value, index) =>
            <li key={index}><Link onClick={closeMenu}  to="/productdetail"><img className='menu-gif' src={value.childGif} alt="" /> <span>{value.childName}</span></Link></li>
        )
    )
}

export default ChildMenu
