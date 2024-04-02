import React, { useEffect, useState } from 'react';
import './CompanyProfile.css';
// import { LoremIpsum } from 'react-lorem-ipsum';
import { Parser } from 'html-to-react'
import SectionTitle from '../SectionTitle';
import BtnLink from '../BtnLink';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ModalVideo from 'react-modal-video';


const CompanyProfile = (props) => {

  const [isOpen, setOpen] = useState(false);
  const [siteInfo, setSiteInfo] = useState([]);

  const boxVariant = {
    visible: { opacity: 1, scale: 1, translateX: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0.25, scale: 0.85, translateX: -180 },
  }

  const control = useAnimation()
  const [ref, inView] = useInView()
  useEffect(() => {
    getSiteInfo();
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

  return (
    <>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 1, theme: "dark" }}
        isOpen={isOpen}
        videoId="-vPON-2pEXg?si=zRK4aAWaCjMBHiZW"
        onClose={() => setOpen(false)}
      />
      <section className="about-section">
        <div className='about-left-shape anim-up-down'><img src={process.env.REACT_APP_BASE_URL +"images/shapes/abt-left.webp"} alt={siteInfo.compName} title={siteInfo.compName} /></div>
        <div className='about-right-shape anim-scale'><img src={process.env.REACT_APP_BASE_URL +"images/shapes/abt-right.webp"} alt={siteInfo.compName} title={siteInfo.compName} /></div>
        <div className='container'>
          <div className=''>

            <motion.div
              ref={ref}
              variants={boxVariant}
              initial="hidden"
              animate={control}
              className='abt-floated'>
              <div className='abt-text-circle'>
                <div className="video-main">
                  <div className="promo-video">
                    <div className="waves-block">
                      <div className="waves wave-1"></div>
                      <div className="waves wave-2"></div>
                      <div className="waves wave-3"></div>
                    </div>
                  </div>
                  <span onClick={() => setOpen(true)} className="video-btn" ><i className="fa fa-play"></i></span>
                </div>
              </div>
              <div className='abt-shape anim-left-right'><img loading='lazy' src={process.env.REACT_APP_BASE_URL + "images/shapes/service-left-shape.svg"} alt="" /></div>
              <div className='row h-100 align-items-end'>
                <div className='w-50'>
                  <img className='w-100' loading='lazy' src={process.env.REACT_APP_BASE_URL + "images/pages/" + props.pageData.img} alt={props.pageData.shortDescription} title={props.pageData.shortDescription} />
                  <div className='exp-box'>
                    <img src="images/gif/abt.gif" alt={props.pageData.shortDescription} title={props.pageData.shortDescription} />
                  </div>
                </div>
                <div className='abt-left-img'>
                  <img className='w-100' loading='lazy' src="images/img/abt2.jpg" alt={props.pageData.shortDescription} title={props.pageData.shortDescription} />
                </div>
              </div>

            </motion.div>
            <div>
              <SectionTitle smTitle="About Company" homeTitle={props.homeTitle} mainTitle={props.pageData.shortDescription} />
            </div>
            <p>{Parser().parse(props.pageData.description)}</p>
            <p>{Parser().parse(props.pageData.extraDescription)}</p>
            <div className='row align-items-center mt-4'>
              <BtnLink Href="/company-profile" btnName="Readmore" />
              <div className="abt-contact-content ">
                <div className="contact-icon">
                  <i className="fa-solid fa-phone-volume"></i>
                </div>
                <div className="contact-text">
                  <span>Call Us Anytime</span>
                  <a className="link" href={"tel:" + siteInfo.primaryPhone}>{siteInfo.primaryPhone}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CompanyProfile
