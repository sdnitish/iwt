import React , {useEffect , useState} from 'react'
import Nav from '../components/nav/Nav';
import BreadCrumb from '../components/sections/BreadCrumb'
import ContactSect from '../components/sections/ContactSect'
import Footer from '../components/sections/Footer';
import { Parser } from 'html-to-react'

const ShippingDelivery = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      getData();
    }, []);
  
    const getData = async () => {
      let result = await fetch(`${process.env.REACT_APP_BASE_URL}shipping`);
      result = await result.json();
      if (result.status) {
        setData(result.data);
      }
    }
  
    return (
        <>
            <Nav />
            <BreadCrumb name="Shipping & Delivery" />
            <section className='sect-space'>
                <div className="container  ">
                <h2>{data.shortDescription}</h2>
                <p>{Parser().parse(data.description)}</p>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default ShippingDelivery
