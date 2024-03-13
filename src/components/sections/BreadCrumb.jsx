import React from 'react';
import './BreadCrumb.css';

const BreadCrumb = (props) => {
  return (
    <section className='bread-crumb'>
      <div className='container'>
        <h1>{props.pageName}</h1>
        <div className='page-title-box'>
            <ul>
                <li><a href="">Home</a></li>
                <li><span><i className="fa-solid fa-angles-right"></i></span></li>
                <li><span>{props.pageName}</span></li>
            </ul>
        </div>
      </div>
    </section>
  )
}

export default BreadCrumb
