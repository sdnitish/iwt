import React from 'react';
import { useLocation } from 'react-router';
import './Sidebar.css';
import '../Admin.css';
import PageNavi from './PageNavi';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import InventoryIcon from '@mui/icons-material/Inventory';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import GradingIcon from '@mui/icons-material/Grading';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LocationOnIcon from '@mui/icons-material/LocationOn';
// import AddBusinessIcon from '@mui/icons-material/AddBusiness';

function Sidebar() {
    const location = useLocation();
    const pages = [
        {
            name: 'Dashboard',
            icon: <DashboardIcon />,
            link: '/admin/dashboard',
            hasChildren: false,
            addClass: location.pathname === "/admin/dashboard" ? "active mb-2 border rounded" : ""
        },
        {
            name: 'Site Information',
            icon: <SettingsApplicationsIcon />,
            link: '/admin/site-info',
            hasChildren: false,
            addClass: location.pathname === "/admin/site-info" ? "active mb-2 border rounded" : ""
        },
        {
            name: 'Banner',
            icon: <ViewCarouselIcon />,
            link: '/admin/banner',
            hasChildren: false,
            addClass: location.pathname === "/admin/banner" ? "active mb-2 border rounded" : ""
        },
        {
            name: 'Pages',
            icon: <AutoStoriesIcon />,
            link: '/admin/pages',
            hasChildren: false,
            addClass: location.pathname === "/admin/pages" ? "active mb-2 border rounded" : ""
        },
        {
            name: 'Product',
            icon: <InventoryIcon />,
            link: '/admin/product',
            hasChildren: false,
            addClass: location.pathname === "/admin/product" ? "active mb-2 border rounded" : ""
        },
        {
            name: 'Promotional Category',
            icon: <GradingIcon />,
            link: '/admin/promotionalCategory',
            hasChildren: false,
            addClass: location.pathname === "/admin/promotionalCategory" ? "active mb-2 border rounded" : ""
        },
        {
            name: 'Keyword In City',
            icon: <ApartmentIcon />,
            link: '/admin/keywordInCity',
            hasChildren: false,
            addClass: location.pathname === "/admin/keywordInCity" ? "active mb-2 border rounded" : ""
        },
        {
            name: 'Our Presence In City',
            icon: <AddLocationAltIcon />,
            link: '/admin/ourPresenceInCity',
            hasChildren: false,
            addClass: location.pathname === "/admin/ourPresenceInCity" ? "active mb-2 border rounded" : ""
        },
        {
            name: 'Location',
            icon: <LocationOnIcon />,
            link: '/admin/location',
            hasChildren: false,
            addClass: location.pathname === "/admin/location" ? "active mb-2 border rounded" : ""
        },
        {
            name: 'Parant Location',
            icon: <LocationOnIcon />,
            link: '/admin/parantLocation',
            hasChildren: false,
            addClass: location.pathname === "/admin/parantLocation" ? "active mb-2 border rounded" : ""
        },
        // {
        //     name: 'Product',
        //     icon: <InventoryIcon />,
        //     link: '#',
        //     hasChild: true,
        //     addClass: location.pathname.includes('product') ? "active mb-2 border rounded" : "",
        //     childs: [
        //         {
        //             name: 'All Product',
        //             link: '/admin/all-product',
        //             addChildClass: location.pathname === "/admin/all-product" ? "active mb-2 border rounded" : ""
        //         },
        //         {
        //             name: 'Product Data',
        //             link: '/admin/product-data',
        //             addChildClass: location.pathname === "/admin/product-data" ? "active mb-2 border rounded" : ""
        //         }
        //     ]
        // }
    ];

    return (
        <div className='sidebar'>
            {
                pages.map((value, index) =>
                    <PageNavi
                        key={index}
                        pageName={value.name}
                        pageIcon={value.icon}
                        link={value.link}
                        hasChild={value.hasChild}
                        addClass={value.addClass}
                        childrens={value.childs ? value.childs : ""}
                    />
                )
            }

        </div>
    )
}

export default Sidebar