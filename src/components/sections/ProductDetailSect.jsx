import { React} from 'react';
import SectionTitle from '../SectionTitle';
import LoremIpsum from 'react-lorem-ipsum';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';

const ProductDetailSect = () => {

    return (
        <section className='sect-space'>
            <div className='container'>
                <div className=''>
                    <img className='w-100' src="./images/img/Dynamic_Website_Designing.gif" alt="" />
                    <div className="row">
                        <div className="col-lg-8 col-md-8 mt-4">
                            <SectionTitle smTitle="Product Details" mainTitle="Bibendum potenti taciti ex parturient lacini" />
                            <LoremIpsum p={5} />
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="all__sidebar-item-help"  >

                                <img className="support-bg" src="./images/img/support.jpg" alt="" />
                                <img className="support-bg-texture" src="./images/img/support.png" alt="" />
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
