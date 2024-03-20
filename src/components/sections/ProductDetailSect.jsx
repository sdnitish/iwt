import { React, useState, useEffect } from 'react';
import SectionTitle from '../SectionTitle';
// import LoremIpsum from 'react-lorem-ipsum';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import { useParams } from 'react-router-dom';

const ProductDetailSect = () => {
    
    const params = useParams();

    const [product, setProduct] = useState([]);

    useEffect(() => {
        getProduct();
    });

    const getProduct = async () => {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}product/${params.slug}`);
        result = await result.json();
        if (result.status) {
            setProduct(result.product);
        }
    }

    return (
        <section className='sect-space'>
            <div className='container'>
                <div className=''>
                    <img className='w-100'  src={"./images/products/" + product.img} alt={product.name} title={product.name} />
                    <div className="row">
                        <div className="col-lg-8 col-md-8 mt-4">
                            <SectionTitle smTitle="Service Details" mainTitle={product.shortDescription} />
                            {product.description}
                            {product.extraDescription}
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
