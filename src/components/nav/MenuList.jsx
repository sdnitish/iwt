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
            <li className='active'><Link onClick={closeMenu} to="/"><img width={40} height={35} className='menu-gif' src={process.env.REACT_APP_BASE_URL + "images/gif/Home-Icon.gif"} alt="Home page gif" title="home page gif" /><span>Home</span></Link></li>

            {
                categories
                    ?
                    categories.map((value, index) =>
                        <HasChildMenu
                            key={index}
                            to={value.slug}
                            closeMenu={closeMenu}
                            servGif={process.env.REACT_APP_BASE_URL + "images/icons/" + value.icon}
                            servChildAlt={value.name}
                            servChildTitle={value.name}
                            servName={value.name}
                            servChild={
                                <ChildMenu
                                    data={props.data}
                                    closeMenu={closeMenu}
                                    servChild={value.products}
                                />
                            }
                        />
                    )
                    :
                    null
            }

            <li ><Link onClick={closeMenu} to="/company-profile"><img width={40} height={35} className='menu-gif' src={process.env.REACT_APP_BASE_URL + "images/gif/Company-Profile.gif"} alt="profile gif" title='profile gif' /> <span>Company Profile</span> </Link></li>
            <li ><Link onClick={closeMenu} to="/blogs"><img width={40} height={35} className='menu-gif' src={process.env.REACT_APP_BASE_URL + "images/gif/Blog.gif"} alt="blog gif" title='blog gig' /> <span>Blogs</span> </Link></li>
            <li ><Link onClick={closeMenu} to="/contact"><img width={40} height={35} className='menu-gif' src={process.env.REACT_APP_BASE_URL + "images/gif/conta-icon.gif"} alt="contact gif" title='contact gif' /> <span>Contact</span> </Link></li>
        </ul>
    )
}

export default MenuList
