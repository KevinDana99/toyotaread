import React from 'react';
import style from '../Dashboard/Dashboard.styles';
import Area from './Area';
import Helpers from './../Helpers/Helpers';

const Plan = () => {

  return <div style={style.panel}>

<div style={{...style.description, height: 'auto'}}>
<div style={{width: '100%', height: '150px', display : 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
<h1 style={{marginLeft: '15px'}}>Plan de servicio</h1>

<div style={{width: '300px', display: 'flex', justifyContent: 'space-around'}}>

<div style={{width: '500px',display: 'flex', justifyContent: 'space-around', alignItems : 'center'}}>
    
<h5>Vehiculo</h5>

<div>Hilux</div>

</div>

<div style={{width: '500px',display: 'flex', justifyContent: 'space-around', alignItems : 'center'}}>
    
<h5>Tipo</h5>

<div>PROMOCION</div>

</div>
</div>

</div>

<div style={{width: '100%', height: 'auto', display : 'flex',flexDirection: 'column',justifyContent: 'space-between'}}>

<Area title="Cambios" items={'Perro'}/>
<Area title="Inspecciones" items={'Perro'}/>
<Area title="Repuestos" items={'Perro'}/>
<Area title="Otros" items={'Perro'}/>
<Area title="Lavado" items={'Perro'}/>
<Area title="Costo" items={'Perro'}/>
</div>
</div>
<div style={{width : '100%', display : 'flex', justifyContent : 'flex-end'}}>

</div>
  </div>;
};

export default Plan;
