import React, { useEffect } from 'react';
import './WhyChoose.css'
import CountUp from 'react-countup';
import SectionTitle from '../SectionTitle';
import LoremIpsum from 'react-lorem-ipsum';
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
    visible: { width: 'var(--prog1)', transition: { duration: 0.6 }},
    hidden: { width: 0},
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
    <section className="sect-space why-sect">
      <img className='shape-right anim-up-down' src="./images/shapes/why-shape.png" alt="" />
      {/* <h1 className='text-center'><CountUp end={100} enableScrollSpy scrollSpyOnce="true" /></h1> */}
      <div className='container'>
        {/* <div className='row m-b40'>
          <div className='col-lg-4 col-md-6 m-b30'>
            <div
             className='countup_box'>
              <div className='icon-box-bg'></div>
              <div className='icon-box row'>
                <div className='cout-icon col-4'>
                  <i className="fa-solid fa-trophy"></i>
                </div>
                <div className='col-8'>
                  <div className='count-text'>
                    <CountUp end={100} enableScrollSpy scrollSpyOnce="true" /> <span>+</span>
                  </div>
                  <p className='count-name'>Awards won</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 m-b30'>
            <div 
             className='countup_box'>
              <div className='icon-box-bg'></div>
              <div className='icon-box row'>
                <div className='cout-icon col-4'>
                  <i className="fa-solid fa-business-time"></i>
                </div>
                <div className='col-8'>
                  <div className='count-text'>
                    <CountUp end={30} enableScrollSpy scrollSpyOnce="true" /> <span>+</span>
                  </div>
                  <p className='count-name'>Years Served</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 m-b30'>
            <div
             className='countup_box'>
              <div className='icon-box-bg'></div>
              <div className='icon-box row'>
                <div className='cout-icon col-4'>
                  <i className="fa-solid fa-users-gear"></i>
                </div>
                <div className='col-8'>
                  <div className='count-text'>
                    <CountUp end={10000} enableScrollSpy scrollSpyOnce="true" /> <span>+</span>
                  </div>
                  <p className='count-name'>Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className='row'>
          <div
            // ref={ref}
            // variants={boxVariantTwo}
            // initial="hidden"
            // animate={control}
            className='col-lg-6'>
            <div className='why-left-img'>
              <img src="./images/img/why-img1.jpg" alt="" />
              {/* <div className='color-layer'><span>Why Us</span></div> */}
            </div>
          </div>
          <div className='col-lg-6 m-t30'>
            <SectionTitle smTitle="Why Choose" mainTitle="We Are Expert In Google Promotion Services" />
            {/* <LoremIpsum p={1} /> */}
            <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Commodo vulputate ultrices suspendisse nam rutrum aliquam laoreet pellentesque. Commodo primis ipsum feugiat vitae cursus nisl adipiscing.</p>
            <div className="row ">
              <div className="col-lg-5 col-md-5 col-sm-12">
                <img className='w-100' src="./images/gif/why-gif.gif" alt="" />
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
            <div class="skill-feature m-t30">
              <p class="skill-feature_title">Customer Satisfied</p>
              <div class="progress">
                <motion.div
                 ref={ref}
                 variants={boxVariantThree}
                 initial="hidden"
                 animate={control}
                 style={{ "--prog1": "90%" }}  class="progress-bar">
                  <div class="progress-value">
                    <CountUp end={90} enableScrollSpy scrollSpyOnce="false" /> <span>%</span></div>
                </motion.div>
              </div>
            </div>
            <div class="skill-feature m-t30">
              <p class="skill-feature_title">Successful Projects</p>
              <div class="progress">
                <motion.div
                 ref={ref}
                 variants={boxVariantThree}
                 initial="hidden"
                 animate={control}
                 style={{ "--prog1": "96%" }}  class="progress-bar">
                   <div class="progress-value">
                    <CountUp end={96} enableScrollSpy scrollSpyOnce="false" /> <span>%</span></div>
                </motion.div>
              </div>
            </div>
           
            <div className='row align-items-center m-t40'>
              <div className='col-auto'><BtnLink Href="" btnName="Book Service" /></div>
              <div className='col-auto d-flex align-items-center'>
                <img src="./images/shapes/group-img.png" alt="" />
                <div className='client-count'>
                 <CountUp end={296} enableScrollSpy scrollSpyOnce="false" /> <span>+</span>
                 <p>Happy Clients</p>
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
