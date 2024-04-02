import React, { useEffect } from 'react';
import './WhyChoose.css'
import CountUp from 'react-countup';
import SectionTitle from '../SectionTitle';
// import LoremIpsum from 'react-lorem-ipsum';
import BtnLink from '../BtnLink';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const WhyChoose = () => {

  // const boxVariant = {
  //   visible: { opacity: 1, scale: 1, translateY: 0, transition: {duration: 0.21} },
  //   hidden: { opacity: 1, scale: 0.98 , translateY: 0},
  // }

  const boxVariantTwo = {
    visible: { opacity: 1, scale: 1, translateX: 0, transition: { duration: 0.4 } },
    hidden: { opacity: 0.25, scale: 0.65, translateX: -100 },
  }
  const boxVariantThree = {
    visible: { width: 'var(--prog1)', transition: { duration: 0.6 } },
    hidden: { width: 0 },
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
    <section className="sect-space pb-2 why-sect">
      <img className='shape-right anim-up-down' src={process.env.REACT_APP_BASE_URL + "images/shapes/why-shape.png"} alt="" />
      {/* <h1 className='text-center'><CountUp end={100} enableScrollSpy scrollSpyOnce="true" /></h1> */}
      <div className='container'>

        <div className='row'>
          <div className='col-lg-6'>
            <div className='why-img'>
              <img className='why-left-img' src={process.env.REACT_APP_BASE_URL + "images/img/why-img4.webp"} alt="" />
              <motion.div
                ref={ref}
                variants={boxVariantTwo}
                initial="hidden"
                animate={control}
                className='why-right-img'>
                <img src={process.env.REACT_APP_BASE_URL + "images/img/why-img1.webp"} alt="" />
              </motion.div>
              <img className='shape-left  anim-up-down' src={process.env.REACT_APP_BASE_URL + "images/shapes/dots.png"} alt="" />
              <span className='why-text anim-up-down'><span>Why Choose Us</span></span>
            </div>
          </div>
          <div className='col-lg-6 m-t30'>
            <SectionTitle smTitle="Why Choose" mainTitle="Get Premium Google Promotion and web designing services" />
            {/* <LoremIpsum p={1} /> */}
            <p>We at Instant Web Technology are all about giving you the best and top-of-the-line Google promotion and web designing services that you can count on for all your online presence-building needs.</p>
            <div className="row ">
              <div className="col-lg-5 col-md-5 col-sm-12">
                <img className='w-100' src={process.env.REACT_APP_BASE_URL + "images/gif/why-gif.gif"} alt="" />
              </div>
              <div className="col-lg-7 col-md-7 col-sm-12">
                <ul className="list-why-us">
                  <li>Your Business Growth</li>
                  <li>Easily Service Management</li>
                  <li>Easily Your Business Growth</li>
                  <li>Service Management</li>
                  <li>Easily Your Business Growth</li>
                </ul>
              </div>
            </div>
            <div className="skill-feature m-t30">
              <p className="skill-feature_title">Customer Satisfied</p>
              <div className="progress">
                <motion.div
                  ref={ref}
                  variants={boxVariantThree}
                  initial="hidden"
                  animate={control}
                  style={{ "--prog1": "90%" }} className="progress-bar">
                  <div className="progress-value">
                    <CountUp end={90} enableScrollSpy scrollSpyOnce="false" /> <span>%</span></div>
                </motion.div>
              </div>
            </div>
            <div className="skill-feature m-t30">
              <p className="skill-feature_title">Successful Projects</p>
              <div className="progress">
                <motion.div
                  ref={ref}
                  variants={boxVariantThree}
                  initial="hidden"
                  animate={control}
                  style={{ "--prog1": "96%" }} className="progress-bar">
                  <div className="progress-value">
                    <CountUp end={96} enableScrollSpy scrollSpyOnce="false" /> <span>%</span></div>
                </motion.div>
              </div>
            </div>

            <div className='row align-items-center m-t40'>
              <div className='col-auto'><BtnLink Href="" btnName="Book Service" /></div>
              <div className='col-auto d-flex align-items-center'>
                <img height={65}  src={process.env.REACT_APP_BASE_URL + "images/shapes/group-img.png"} alt="" />
                <div className='client-count'>
                  <CountUp end={500} enableScrollSpy scrollSpyOnce="false" /> <span>+</span>
                  <p>Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row counter-box'>
          <div className='col-lg-3 col-md-4 col-sm-6 m-b30'>
            <div
              className='countup_box'>
              <div className='icon-box-bg'></div>
              <div className='icon-box row'>
                <div className='cout-icon col-auto'>
                  <img height={60} width={60} src={process.env.REACT_APP_BASE_URL + "images/gif/Client1.gif"} alt="" />
                </div>
                <div className='col-auto'>
                  <div className='count-text'>
                    <CountUp end={500} enableScrollSpy scrollSpyOnce="true" /> <span>+</span>
                  </div>
                  <p className='count-name'>Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-4 col-sm-6 m-b30'>
            <div
              className='countup_box'>
              <div className='icon-box-bg'></div>
              <div className='icon-box row'>
                <div className='cout-icon col-auto'>
                  <img height={65} width={65} src={process.env.REACT_APP_BASE_URL + "images/gif/Award-2.gif"} alt="" />
                </div>
                <div className='col-auto'>
                  <div className='count-text'>
                    <CountUp end={10} enableScrollSpy scrollSpyOnce="true" /> <span>+</span>
                  </div>
                  <p className='count-name'>Awards won</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-4 col-sm-6 m-b30'>
            <div
              className='countup_box'>
              <div className='icon-box-bg'></div>
              <div className='icon-box row'>
                <div className='cout-icon col-auto'>
                  <img height={60} width={60} src={process.env.REACT_APP_BASE_URL + "images/gif/Ideas1.gif"} alt="" />
                </div>
                <div className='col-auto'>
                  <div className='count-text'>
                    <CountUp end={15} enableScrollSpy scrollSpyOnce="true" /> <span>+</span>
                  </div>
                  <p className='count-name'>Technologies</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-4 col-sm-6 m-b30'>
            <div
              className='countup_box'>
              <div className='icon-box-bg'></div>
              <div className='icon-box row'>
                <div className='cout-icon col-auto'>
                  <img height={65} width={65} src={process.env.REACT_APP_BASE_URL + "images/gif/Employees1.gif"} alt="" />
                </div>
                <div className='col-auto'>
                  <div className='count-text'>
                    <CountUp end={50} enableScrollSpy scrollSpyOnce="true" /> <span>+</span>
                  </div>
                  <p className='count-name'>Employees</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default WhyChoose
