import React from 'react';
import style from './../Dashboard/Dashboard.styles';

const Area = (props) => {
 
    return (

<div style={style.area}>

<h4 style={style.title_area}>{props.title}</h4>

<div style={{width: '100%', height: 'auto'}}>

{props.title != 'Costo' ?

<div style={{height: 'auto',width: '100%', display: 'flex', flexDirection : 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}}>

<h6 style={{color : '#191919'}}>Pastillas de motor</h6>
<h6 style={{color : '#191919'}}>Pastillas de motor</h6>
<h6 style={{color : '#191919'}}>Pastillas de motor</h6>
</div>
 : 
 <div style={{width : '100%',display: 'flex', justifyContent: 'space-between'}}>
<h5>Detalle</h5>
<div style={{width: '200px',display: 'flex', justifyContent: 'space-around'}}>
<h5>Tiempo</h5>
<h5>Sub-total</h5>
</div>
</div>
}

</div>

</div>

    )
  
  
  
};

export default Area;
