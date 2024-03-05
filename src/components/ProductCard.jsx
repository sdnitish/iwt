import React, { useEffect } from 'react';
import './ProductCard.css';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BtnLink from './BtnLink';

const ProductCard = (props) => {

  const boxVariant = {
    visible: { opacity: 1, scale: 1, translateX: 0, transition: { duration: 0.4 } },
    hidden: { opacity: 0.25, scale: 0.65, translateX: 180 },
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
    <motion.div
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
      className='service-card'>
      <div className='serv-tag'>
        Service 
        <div className='brdr-btm'></div>
      </div>
      <div className='service-name-box'>
        <div className='service-content'>
          <a className='service-name' href="">{props.productName}</a>
          <span className='service-name-title' >{props.servDesc}</span>
          <p className='serv-price'>&#8377;: {props.servPrice}/- <span>(Gst Exclusive)</span></p>
          <BtnLink Href={props.servLink} btnName="Book our Service" />
        </div>
      </div>
      <div className='service-img'>
        <img className='w-100' loading='lazy' src={props.servIcon} alt="" />
      </div>
    </motion.div>
  )
}

export default ProductCard
