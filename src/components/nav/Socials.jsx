import React from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Socials = () => {
    return (
            <ul className='social-icn-common'>
                <li>
                    <a href="#"><XIcon /></a>
                </li>
                <li>
                    <a href="#"><WhatsAppIcon /></a>
                </li>
                <li>
                    <a href="#"><InstagramIcon /></a>
                </li>
                <li>
                    <a href="#"><FacebookOutlinedIcon /></a>
                </li>
                <li>
                    <a href="#"><SubscriptionsIcon /></a>
                </li>
                <li>
                    <a href="#"><LinkedInIcon /></a>
                </li>
            </ul>
    )
}

export default Socials
