import React from 'react';
import LastPageIcon from '@mui/icons-material/LastPage';

const BtnLink = (props) => {
  return (
    <a className={props.addClass  + ' ' + 'thm-btn'} href={props.Href}>{props.btnName} 
    {/* <LastPageIcon /> */}
    <img src="images/img/pointer.gif" alt="" />
    </a>
  )
}

export default BtnLink
