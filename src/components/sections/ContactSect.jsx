import React, { useEffect, useState } from 'react';
import './ContactSect.css';
import SectionTitle from '../SectionTitle';
import Socials from '../nav/Socials';
import Button from '../Button';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const ContactSect = () => {

    const [siteInfo, setSiteInfo] = useState([]);
    const [products, setProduct] = useState([]);

    const boxVariant = {
        visible: { opacity: 1, scale: 1, transition: { duration: 0.325 } },
        hidden: { opacity: 0.25, scale: 0.65 },
    }

    const control = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
        getSiteInfo();
        getProducts();
        if (inView) {
            control.start("visible");
        }
        else {
            control.start("hidden");
        }
    }, [control, inView]);

    const getSiteInfo = async () => {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}siteInfo`);
        result = await result.json();
        if (result.status) {
            setSiteInfo(result.siteInfo);
        }
    }

    const getProducts = async () => {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}products`)
        result = await result.json();
        if (result.status) {
            setProduct(result.products);
        }
    }

    return (
        <>
            <section className='sect-space bg-gry contact-container'>
                <div className='container'>

                    <div className='row'>
                        <div className='col-lg-5 col-md-6 conta-scls'>

                            <motion.div className='w-100'
                                ref={ref}
                                variants={boxVariant}
                                initial="hidden"
                                animate={control}
                            >
                                <img className='w-100' src="./images/gif/meeting-1.gif" alt="" />
                            </motion.div>
                            <Socials data={siteInfo} />
                        </div>
                        <div className='col-lg-7 col-md-6 px-4'>
                            <SectionTitle smTitle="Contact" mainTitle="Semper tellus semmag" />
                            <p className='m-t20'>Cursus quis condimentum nunc ultricies dis nisi diam nec. Bibendum potenti taciti ex parturient lacinia velit habitant.  </p>
                            <div className='Contact_box '>
                                <form>
                                    <div className='row'>
                                        <div className='col-lg-6'><TextField label="Your Name" /></div>
                                        <div className='col-lg-6'><TextField label="Your Phone" /></div>
                                        <div className='col-lg-6'><TextField label="Your Email" /></div>
                                        <div className='col-lg-6'>
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Select service</InputLabel>
                                                <Select
                                                    label="Select product"
                                                // onChange={handleChange}
                                                >
                                                    {
                                                        products
                                                            ?
                                                            products.map((value, index) =>
                                                                <MenuItem key={index} value={value.name}>{value.name}</MenuItem>
                                                            )
                                                            :
                                                            null
                                                    }
                                                </Select>
                                            </FormControl>

                                        </div>
                                        <div className='col-12'><TextField label="Company Name" /></div>
                                        <div className='col-12'><TextField multiline rows={3} label="Write any message..." /></div>
                                        <div className='col-12'><Button btnType="submit" btnName="Submit Query" /></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='sect-space pt-3'>
                <div className='container'>
                    <div className='row m-t30'>
                        <div className='col-lg-4 col-md-6'>
                            <div className='conta-info-bx'>
                                <div className='conta-info-bx-bg2'></div>
                                <div className='conta-info-bx-bg'></div>
                                <div className='conta-info-bx-icn'><PhoneInTalkOutlinedIcon /></div>
                                <div className='conta-info-bx-in'>
                                    <a href={"tel:" + siteInfo.primaryPhone}><PhoneInTalkOutlinedIcon />{siteInfo.primaryPhone}</a>
                                    <a href={"tel:" + siteInfo.secondaryPhone}><PhoneInTalkOutlinedIcon />{siteInfo.secondaryPhone}</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6'>
                            <div className='conta-info-bx'>
                                <div className='conta-info-bx-bg2'></div>
                                <div className='conta-info-bx-bg'></div>
                                <div className='conta-info-bx-icn'><MarkEmailUnreadOutlinedIcon /></div>
                                <div className='conta-info-bx-in'>
                                    <a href={"mailto:" + siteInfo.primaryMail}><MarkEmailUnreadOutlinedIcon /> {siteInfo.primaryMail}</a>
                                    <a href={"mailto:" + siteInfo.secondaryMail}><MarkEmailUnreadOutlinedIcon /> {siteInfo.secondaryMail} </a>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-12'>
                            <div className='conta-info-bx'>
                                <div className='conta-info-bx-bg2'></div>
                                <div className='conta-info-bx-bg'></div>
                                <div className='conta-info-bx-icn'><LocationOnOutlinedIcon /></div>
                                <div className='conta-info-bx-in'>
                                    <span><LocationOnOutlinedIcon /> {siteInfo.primaryAddress}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactSect
