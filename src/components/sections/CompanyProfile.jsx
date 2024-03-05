import React, { useEffect } from 'react';
import './CompanyProfile.css';
import { LoremIpsum } from 'react-lorem-ipsum';
import SectionTitle from '../SectionTitle';
import BtnLink from '../BtnLink';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CompanyProfile = () => {

  const boxVariant = {
    visible: { opacity: 1, scale: 1, translateX: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0.25, scale: 0.85, translateX: -180 },
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
      <section className="about-section">
        <div className='about-left-shape anim-up-down'><img src="images/shapes/abt-left.png" alt="" /></div>
        <div className='about-right-shape anim-scale'><img src="images/shapes/abt-right.png" alt="" /></div>
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
                  <a href="https://www.youtube.com/watch?v=BqI0Q7e4kbk" className="video video-popup mfp-iframe" data-lity><i className="fa fa-play"></i></a>
                </div>
              </div>
              <div className='abt-shape anim-left-right'><img loading='lazy' src="images/shapes/service-left-shape.svg" alt="" /></div>
              <div className='row h-100 align-items-end'>
                <div className='w-50'>
                  <img className='w-100' loading='lazy' src="images/img/abt1.jpg" alt="" />
                  <div className='exp-box'>
                    <img src="images/gif/abt.gif" alt="" />
                  </div>
                </div>
                <div className='abt-left-img'>
                  <img className='w-100' loading='lazy' src="images/img/abt2.jpg" alt="" />
                </div>
              </div>

            </motion.div>
            <div>
              <SectionTitle smTitle="About Company" mainTitle="Company lorem ipsumt konilat diltavt" />
            </div>
            <LoremIpsum p={4} />
            <div className='row align-items-center mt-4'>
              <BtnLink Href="" btnName="Readmore" />
              <div className="abt-contact-content ">
                <div className="contact-icon">
                  <i className="fa-solid fa-phone-volume"></i>
                </div>
                <div className="contact-text">
                  <span>Call Us Anytime</span>
                  <a className="link" href="">+91 00000 00000</a>
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
