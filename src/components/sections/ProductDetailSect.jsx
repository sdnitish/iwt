import { React } from 'react';
import SectionTitle from '../SectionTitle';
import { Parser } from 'html-to-react'
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';

const ProductDetailSect = (props) => {

    return (
        <section className='sect-space'>
            <div className='container'>
                <div className=''>
                    <img className='w-100' src={process.env.REACT_APP_BASE_URL + "images/products/" + props.product.img} alt={props.product.name} title={props.product.name} />
                    <div className="row">
                        <div className="col-lg-8 col-md-8 mt-4">
                            <SectionTitle smTitle="Service Details" mainTitle={props.product.shortDescription} />
                            {Parser().parse(props.product.description)}
                            {Parser().parse(props.product.extraDescription)}
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="all__sidebar-item-help"  >

                                <img className="support-bg" src={process.env.REACT_APP_BASE_URL + "images/img/support.jpg"} alt="Support Iwt" />
                                <img className="support-bg-texture" src={process.env.REACT_APP_BASE_URL + "images/img/support.png"} alt="Support Iwt" />
                                <div className="support-det">
                                    <p className='sprt-h'>Request a Free Call in Today !</p>
                                    <div className="all__sidebar-item-help-contact">
                                        <PhoneInTalkOutlinedIcon />
                                        <div className="all__sidebar-item-help-contact-content">
                                            <span>Quick Help</span>
                                            <a href="tel:">+91-00000 000000</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDetailSect
