import { React } from 'react';
import SectionTitle from '../SectionTitle';
import { Parser } from 'html-to-react'
import QuickHelpCard from '../QuickHelpCard';

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
                            <QuickHelpCard />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDetailSect
