import React from 'react'
import { Link } from 'react-router-dom';

const ChildMenu = (props) => {
    return (

        props.servChild.map((value, index) =>
            <li key={index}><Link to=""><img className='menu-gif' src={value.childGif} alt="" /> <span>{value.childName}</span></Link></li>
        )
    )
}

export default ChildMenu
