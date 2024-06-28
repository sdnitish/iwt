import React , {useEffect , useState} from 'react'
import Nav from '../components/nav/Nav';
import BreadCrumb from '../components/sections/BreadCrumb'
import ContactSect from '../components/sections/ContactSect'
import Footer from '../components/sections/Footer';
import { Parser } from 'html-to-react'

const CancellationRefund = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      getData();
    }, []);
  
    const getData = async () => {
      let result = await fetch(`${process.env.REACT_APP_BASE_URL}cancellation`);
      result = await result.json();
      if (result.status) {
        setData(result.data);
      }
    }
  
    return (
        <>
            <Nav />
            <BreadCrumb name="Cancellation & Refund" />
            <section className='sect-space'>
                <div className="container  ul-cstm">
                    <h2>{data.shortDescription}</h2>
                    <p>{Parser().parse(data.description)}</p>
                </div>
            </section>
            <Footer />
        </>
    )
}
export default CancellationRefund
