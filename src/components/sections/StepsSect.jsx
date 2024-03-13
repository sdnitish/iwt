import React from 'react'
import './StepsSect.css'
import StepsLeft from '../StepsLeft'
import StepsRight from '../StepsRight'

const StepsSect = () => {
  return (
    <section className='sect-space bg-gry overflow-hidden'>
      <div className="container work-process  pb-3 pt-3">
        {/* <div className="row">
          <div className="col-lg-12 col-md-11 pdb-30 pdt-30">
            <div className="section-title-header text-center">
              <p className="section-title2 mb0">How We Work</p>
            </div>
          </div>
        </div> */}

         <StepsLeft stepTitle="Client Consultation" stepDesc="Insta Vyapar collects all information about the client's..." stepNo="01"/>

         <StepsRight stepTitle="Planning and Strategy" stepDesc="Based on the client's input, Insta Vyapar creates a comprehensive plan for the website..." stepNo="02"/>

        <StepsLeft stepTitle="Client Consultation" stepDesc="Insta Vyapar collects all information about the client's..." stepNo="03"/>

        
        <StepsRight stepTitle="Planning and Strategy" stepDesc="Based on the client's input, Insta Vyapar creates a comprehensive plan for the website..." stepNo="04"/>

        <StepsLeft addClass="process-last" stepTitle="Client Consultation" stepDesc="Insta Vyapar collects all information about the client's..." stepNo="05"/>
      </div>
    </section>
  )
}

export default StepsSect
