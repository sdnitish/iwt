import React from 'react';
import { Link } from 'react-router-dom';
import HasChildMenu from './HasChildMenu';
import ChildMenu from './ChildMenu';

const MenuList = (props) => {

    const categories = props.categories;

    const closeMenu = () => {
        props.closeMenu(false);
    };

    return (
        <ul>
            <li className='active'><Link onClick={closeMenu} to="/"><img className='menu-gif' src={process.env.REACT_APP_BASE_URL + "images/gif/Home-Icon.gif"} alt="" /><span>Home</span></Link></li>

            {
                categories
                    ?
                    categories.map((value, index) =>
                        <HasChildMenu
                            key={index}
                            to={value.slug}
                            closeMenu={closeMenu}
                            servGif={process.env.REACT_APP_BASE_URL + "images/icons/" + value.icon}
                            servName={value.name}
                            servChild={<ChildMenu closeMenu={closeMenu} servChild={value.products} />}
                        />
                    )
                    :
                    null
            }

            <li ><Link onClick={closeMenu} to="/company-profile"><img className='menu-gif' src={process.env.REACT_APP_BASE_URL + "images/gif/Company-Profile.gif"} alt="" /> <span>Company Profile</span> </Link></li>

            <li ><Link onClick={closeMenu} to="/contact"><img className='menu-gif' src={process.env.REACT_APP_BASE_URL + "images/gif/contact.gif"} alt="" /> <span>Contact</span> </Link></li>
        </ul>
    )
}

export default MenuList
