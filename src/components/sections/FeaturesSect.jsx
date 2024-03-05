import React from 'react';
import SectionTitle from '../SectionTitle';
import FeatureCard from '../FeatureCard';

const FeaturesSect = () => {
  return (
    <section className=' pt-5'>
      <div className='container'>
        {/* <div className='row'>
            <div className='col-lg-6'><SectionTitle smTitle="Features" mainTitle="Semper tellus sem magnis lacinia, elit montes quis" /></div>
            <div className='col-lg-6'><p className='m-t20'>Cursus quis condimentum nunc ultricies dis nisi diam nec. Bibendum potenti taciti ex parturient lacinia velit habitant. Volutpat nunc inceptos ultricies nisl accumsan mus quisque hac nunc. Primis curabitur iaculis class per egestas imperdiet. </p></div>
        </div> */}
        <div className='row'>
            <FeatureCard addClass="card-one" featImg="./images/gif/feat3.gif" featNumb="01" featTitle="Small Title" featDesc="Lorem ipsum dolor gravida. Risus commm aecenas accumsa lacus vel facilisis ommm aecenas accumsa lacus vel ." />

            <FeatureCard addClass="card-two" featImg="./images/gif/feat3.gif"  featNumb="02" featTitle="Small Title" featDesc="Lorem ipsum dolor gravida. Risus commm aecenas accumsa lacus vel facilisis ommm aecenas accumsa lacus vel ." />

            <FeatureCard  addClass="card-three" featImg="./images/gif/feat3.gif" featNumb="03" featTitle="Small Title" featDesc="Lorem ipsum dolor gravida. Risus commm aecenas accumsa lacus vel facilisis ommm aecenas accumsa lacus vel ." />

        </div>
      </div>
    </section>
  )
}

export default FeaturesSect
