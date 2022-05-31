import React from 'react';
import style from './Nav.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faHome, faCalendar, faCog, faFileInvoice} from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt, faFileAlt, faClipboard } from '@fortawesome/free-regular-svg-icons';
import {Link} from "react-router-dom";

const Nav = () => {
  return <div style={style.nav}>


<Link to="/tasks">
<FontAwesomeIcon icon={faClipboard} style={style.icon}/>
</Link>

<Link to="/board">
<FontAwesomeIcon icon={faCalendarAlt} style={style.icon}/>
</Link>
<FontAwesomeIcon icon={faCog} style={style.icon}/> 

  </div>;
};

export default Nav;
