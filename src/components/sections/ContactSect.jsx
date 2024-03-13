import React, { useEffect } from 'react';
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

    const boxVariant = {
        visible: { opacity: 1, scale: 1, transition: { duration: 0.325 } },
        hidden: { opacity: 0.25, scale: 0.65 },
    }

    const control = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
            control.start("visible");
        }
        else {
            control.start("hidden");
        }
    }, [control, inView]);

    return (
        <>
            <section className='sect-space bg-gry contact-container'>
                <div className='container'>

                    <div className='row'>
                        <div className='col-lg-5 col-md-6 conta-scls'>
                            {/* <motion.div
                            ref={ref}
                            variants={boxVariant}
                            initial="hidden"
                            animate={control}
                            className='contact-info'>
                            <div className='contacts-box m-t30'>
                                <div className='cont-icn'><i className="fa-solid fa-phone-volume"></i></div>
                                <div className='conta-links'>
                                    <span className='title'>Phone</span>
                                    <a href="">+91 0000 00000</a>
                                </div>
                            </div>
                            <div className='contacts-box'>
                                <div className='cont-icn'><i className="fa-solid fa-envelope-open-text"></i></div>
                                <div className='conta-links'>
                                    <span className='title'>Email</span>
                                    <a href="">contact@company.com</a>
                                </div>
                            </div>
                            <div className='contacts-box'>
                                <div className='cont-icn'><i className="fa-solid fa-map-location-dot"></i></div>
                                <div className='conta-links'>
                                    <span className='title'>Address</span>
                                    <span>456, Loandon Street, lorem tisuml, 33454, India</span>
                                </div>
                            </div>
                        </motion.div> */}
                        <motion.div className='w-100'
                         ref={ref}
                         variants={boxVariant}
                         initial="hidden"
                         animate={control}
                        >
                            <img className='w-100' src="./images/gif/meeting-1.gif" alt="" />
                        </motion.div>
                         <Socials></Socials>
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
                                                    <MenuItem value={10}>Ten</MenuItem>
                                                    <MenuItem value={20}>Twenty</MenuItem>
                                                    <MenuItem value={30}>Thirty</MenuItem>
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
                                    <a href=""><PhoneInTalkOutlinedIcon /> +91 0000 00000</a>
                                    <a href=""><PhoneInTalkOutlinedIcon /> +91 0000 00000</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6'>
                            <div className='conta-info-bx'>
                                <div className='conta-info-bx-bg2'></div>
                                <div className='conta-info-bx-bg'></div>
                                <div className='conta-info-bx-icn'><MarkEmailUnreadOutlinedIcon /></div>
                                <div className='conta-info-bx-in'>
                                    <a href=""><MarkEmailUnreadOutlinedIcon /> contact@instantweb.com </a>
                                    <a href=""><MarkEmailUnreadOutlinedIcon /> contact@instantweb.com </a>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-12'>
                            <div className='conta-info-bx'>
                                <div className='conta-info-bx-bg2'></div>
                                <div className='conta-info-bx-bg'></div>
                                <div className='conta-info-bx-icn'><LocationOnOutlinedIcon /></div>
                                <div className='conta-info-bx-in'>
                                    <span><LocationOnOutlinedIcon /> 24/7 First Floor, Mall Road, Tilak Nagar, New Delhi - 110018</span>
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
