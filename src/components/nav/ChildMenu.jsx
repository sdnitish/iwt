import React from 'react'
import { Link } from 'react-router-dom';

const ChildMenu = (props) => {
    const closeMenu = () => {
        props.closeMenu(false);
    };
    return (

        props.servChild.map((value, index) =>
            <li key={index}><Link onClick={closeMenu} to={value.slug}><img className='menu-gif' src={process.env.REACT_APP_BASE_URL + "images/icons/" + value.icon} alt={value.name} title={value.name} /> <span>{value.name}</span></Link></li>
        )
    )
}

export default ChildMenu
