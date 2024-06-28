import React , {useEffect , useState} from 'react'
import Nav from '../components/nav/Nav';
import BreadCrumb from '../components/sections/BreadCrumb'
import ContactSect from '../components/sections/ContactSect'
import Footer from '../components/sections/Footer';
import { Parser } from 'html-to-react'

const TermsConditions = () => {
    const [termsData, setTermsData] = useState([]);

    useEffect(() => {
      getTermsData();
    }, []);
  
    const getTermsData = async () => {
      let result = await fetch(`${process.env.REACT_APP_BASE_URL}termsConditions`);
      result = await result.json();
      if (result.status) {
        setTermsData(result.terms);
      }
    }
  
    return (
        <>
            <Nav />
            <BreadCrumb name="Terms & Conditions" />
            <section className='sect-space'>
                <div className="container ul-dots ">
                <h2>{termsData.shortDescription}</h2>
                <p>{Parser().parse(termsData.description)}</p>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default TermsConditions
