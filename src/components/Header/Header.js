import style from './Header.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';

import React from 'react';

const Header = () => {


  return <div style={style.container}>

<div>

    <img src="assets/logow.png" width="200px"/>


</div>

<div style={{width: '350px',display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
    
    <div>Asesor de citas</div>
    <div style={style.boxUser}>
    <FontAwesomeIcon icon={faUser} style={{color: '#00000027', fontSize : '1.5rem'}}/>
    
    </div>

<div>Kevin</div>

    <FontAwesomeIcon icon={faSignOutAlt} style={{color: 'white', fontSize : '1.2rem'}}/>
    </div> 


  </div>;


};

export default Header;
