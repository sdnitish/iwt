import React from 'react';
import { Link } from 'react-router-dom';
// import LastPageIcon from '@mui/icons-material/LastPage';

const BtnLink = (props) => {
  return (
    <Link className={props.addClass  + ' ' + 'thm-btn'} to={props.Href}>{props.btnName} 
    {/* <LastPageIcon /> */}
    <img src="images/img/pointer.gif" alt="" />
    </Link>
  )
}

export default BtnLink
