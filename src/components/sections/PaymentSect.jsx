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
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import toast, { Toaster } from 'react-hot-toast';


const PaymentSect = () => {
    // const [activeMethod, setActiveMethod] = useState(false);
    const [activePhonePay, setActivePhonePay] = useState(false);
    const [activePayu, setActivePayu] = useState(false);
    const [formOpen, setFormOpen] = useState(true);
    const [methodOpen, setMethodOpen] = useState(false);
    const [termsOpen, setTermsOpen] = useState(false);
    const [siteInfo, setSiteInfo] = useState([]);
    const [error, setError] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [paymentFor, setPaymentFor] = useState('');
    const [purpose, setPurpose] = useState('');
    const [amount, setAmount] = useState('');
    const [method, setMethod] = useState('');
    const [terms, setTerms] = useState(false);

    useEffect(() => {
        getSiteInfo();
    },[]);

    const getSiteInfo = async () => {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}siteInfo`);
        result = await result.json();
        if (result.status) {
            setSiteInfo(result.siteInfo);
        }
    }

    const handleEnquiryForm = async (event) => {
        event.preventDefault();
        const formData = event.target;
        const form = new FormData(formData);
        const data = Object.fromEntries(form.entries());
        Object.keys(data).forEach(k => data[k] = data[k].trim());
        if (
            data.name === '' ||
            data.phone === '' ||
            data.email === '' ||
            data.paymentFor === '' ||
            data.purpose === '' ||
            data.method === '' ||
            data.amount === '' ||
            terms === false
        ) {
            toast.error("Accept terms and conditions.", {
                style: {
                    borderRadius: '10px',
                    background: 'red',
                    color: '#fff',
                }
            });
            setError(true);
            return false;
        }

        let result = await fetch(`${process.env.REACT_APP_BASE_URL}paymentDetails`,
            {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' },
            }
        )

        result = await result.json();

        // if (result.status) {
        //     toast.success('Thank you for Contacting.', {
        //         style: {
        //             borderRadius: '10px',
        //             background: '#2c2b7b',
        //             color: '#fff',
        //         }
        //     });
        // } else {
        //     toast.error(result.message, {
        //         style: {
        //             borderRadius: '10px',
        //             background: '#2c2b7b',
        //             color: '#fff',
        //         }
        //     });
        // }
    }

    const ActivePhonePay = () => {
        setActivePhonePay(true);
        setActivePayu(false);
    }

    const ActivePayu = () => {
        setActivePhonePay(false);
        setActivePayu(true);
    }

    const FormOpen = () => {
        if (
            name === '' ||
            phone === '' ||
            email === '' ||
            paymentFor === '' ||
            purpose === '' ||
            amount === ''
        ) {
            toast.error("Kindly Fill The Details", {
                style: {
                    borderRadius: '10px',
                    background: 'red',
                    color: '#fff',
                }
            });
        }
        else {
            setFormOpen(false);
            setMethodOpen(true);
            setTermsOpen(false);
        }
    }

    const prevForm = () => {
        setFormOpen(true);
        setMethodOpen(false);
        setTermsOpen(false);
    }
    const TermsStep = () => {
        if (
            method === ''
        ) {
            toast.error("Kindly Select Payment Method", {
                style: {
                    borderRadius: '10px',
                    background: 'red',
                    color: '#fff',
                }
            });
        }
        else {
            setFormOpen(false);
            setMethodOpen(false);
            setTermsOpen(true);
        }
    }
    const prevTerms = () => {
        setFormOpen(false);
        setMethodOpen(true);
        setTermsOpen(false);
    }

    return (
        <>
            <Toaster position="top-right" />
            <section className='sect-space bg-gry overflow-hidden'>
                <form className='w-100' onSubmit={handleEnquiryForm}>
                    <div className={formOpen ? "container " : "d-none container"}>

                        <div className='row'>
                            <div className='col-lg-5 col-md-6 conta-scls'>
                                <SectionTitle smTitle="Payment" mainTitle="Step 1.  Fill The Form" />
                                <img className='w-100 payment-img' src="images/img/payment.svg" alt="" />
                            </div>
                            <div className='col-lg-7 col-md-6 px-4 m-t50'>

                                <div className='Contact_box '>
                                    <div >
                                        <div className='row'>
                                            <div className='col-lg-6'>
                                                <TextField
                                                    error={
                                                        (error && name == '')
                                                            ?
                                                            true
                                                            :
                                                            false
                                                    }
                                                    onChange={e => setName(e.target.value)}
                                                    label="Your Name"
                                                    name='name'
                                                    type='text' />
                                            </div>
                                            <div className='col-lg-6'>
                                                <TextField
                                                    error={
                                                        (error && phone == '')
                                                            ?
                                                            true
                                                            :
                                                            false
                                                    }
                                                    onChange={e => setPhone(e.target.value)}
                                                    label="Your Phone"
                                                    name='phone'
                                                    type='number' />
                                            </div>
                                            <div className='col-lg-6'>
                                                <TextField
                                                    error={
                                                        (error && email == '')
                                                            ?
                                                            true
                                                            :
                                                            false
                                                    }
                                                    onChange={e => setEmail(e.target.value)}
                                                    label="Your Email"
                                                    name='email'
                                                    type='email' />
                                            </div>
                                            <div className='col-lg-6'>
                                                <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Payment For</InputLabel>
                                                <Select
                                                    error={
                                                        (error && paymentFor == '')
                                                            ?
                                                            true
                                                            :
                                                            false
                                                    }
                                                    onChange={e => setPaymentFor(e.target.value)}
                                                    label="Payment For"
                                                    name='paymentFor'
                                                >
                                                    <MenuItem value="Instant Web Tech Pvt. Ltd.">Instant Web Tech Pvt. Ltd.</MenuItem>
                                                    <MenuItem value="Insta Vyapar">Insta Vyapar</MenuItem>
                                                </Select>
                                            </FormControl>

                                            </div>
                                            <div className='col-12'>

                                                <TextField
                                                    error={
                                                        (error && purpose == '')
                                                            ?
                                                            true
                                                            :
                                                            false
                                                    }
                                                    onChange={e => setPurpose(e.target.value)}
                                                    label="Purpose of Payment"
                                                    name='purpose'
                                                    type='text' />
                                            </div>
                                            <div className='col-12'>
                                                <TextField
                                                    error={
                                                        (error && amount == '')
                                                            ?
                                                            true
                                                            :
                                                            false
                                                    }
                                                    onChange={e => setAmount(e.target.value)}
                                                    label="Amount"
                                                    name='amount'
                                                    type='text' />
                                            </div>

                                            <div className='col-12'>
                                                <span onClick={FormOpen} className='thm-btn '>Next Step</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={methodOpen ? "container" : " d-none container"}>
                        <SectionTitle smTitle="Payment" mainTitle="Step 2. Choose Your Payment Method" />
                        <div className='row '>
                            <div className='col-lg-3 col-md-4 col-sm-6 m-t25'>
                                <label onClick={ActivePhonePay} className={activePhonePay ? 'w-100 payment-options   active' : 'w-100 payment-options '} htmlFor="phonepay">
                                    <input
                                        error={
                                            (error && method == '')
                                                ?
                                                true
                                                :
                                                false
                                        }
                                        onChange={e => setMethod(e.target.value)}
                                        type="radio"
                                        value="phonepay"
                                        name="paymentMethod"
                                        id="phonepay" />
                                    <img className='w-100 ' src="images/img/phonepe.png" alt="" />
                                </label>
                            </div>
                            <div className='col-lg-3 col-md-4 col-sm-6 m-t25'>
                                <label onClick={ActivePayu} className={activePayu ? 'w-100 payment-options   active' : 'w-100 payment-options '} htmlFor="payu">
                                    <input
                                        error={
                                            (error && method == '')
                                                ?
                                                true
                                                :
                                                false
                                        }
                                        onChange={e => setMethod(e.target.value)}
                                        type="radio"
                                        value="payu"
                                        name="paymentMethod"
                                        id="payu" />
                                    <img className='w-100 ' src="images/img/payu2.png" alt="" />
                                </label>
                            </div>
                        </div>
                        <div className="d-flex m-t30 gap-4">
                            <span onClick={prevForm} className='thm-btn'>Previous Step</span>
                            <span onClick={TermsStep} className='thm-btn'>Next Step</span>
                        </div>
                    </div>

                    <div className={termsOpen ? "container " : " d-none container"}>
                        <SectionTitle smTitle="Payment" mainTitle="Step 3. Read Terms & Conditions" />
                        <div className=''>
                            <b>Terms of Use</b>
                            <div className="terms-content">
                                TERMS & CONDITION
                                
                            </div>
                            <div className="mt-2 d-flex gap-2 crsr-pointer">
                                <input
                                error={
                                    (error && terms === false)
                                        ?
                                        true
                                        :
                                        false
                                }
                                onChange={e => setTerms(e.target.checked)}
                                type="checkbox" 
                                name="terms"
                                defaultValue="accepted"
                                id="confirmTerms"
                                 /><label htmlFor="confirmTerms">Yes, I agree to all the <b>Terms of Use</b>.</label></div>
                        </div>
                        <div className="d-flex m-t30 gap-4">
                            <span onClick={prevTerms} className='thm-btn'>Previous Step</span>
                            <button type='submit'  className='thm-btn'>Proceed</button>
                        </div>
                    </div>
                </form>
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
            </section >
        </>
    )
}

export default PaymentSect
