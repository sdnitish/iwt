import React from 'react';
// import LastPageIcon from '@mui/icons-material/LastPage';

const Button = (props) => {
  return (
    <button className='thm-btn ' type={props.btnType}>{props.btnName} 
     <img src="images/img/pointer.gif" alt="" />
    </button>
  )
}

export default Button
