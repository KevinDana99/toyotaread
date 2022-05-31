import React, {useState} from 'react';
import style from '../Dashboard/Dashboard.styles';
import Helpers from './../Helpers/Helpers';

const Form = () => {

    const [state,setState] = useState({

        plan : "No definido"
        
        
        });

  return <div>


<div style={style.panel}>

<div style={{width : 'auto', maxWidth : '300px',display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>

<h1 style={{marginLeft: '40px'}}>Plan - </h1>

<h1 style={{color: 'grey', fontSize: '1.4rem'}}>{state.plan}</h1>

</div>

<div style={{widht : '100%', height: '300px', display: 'flex', flexDirection: 'row ', justifyContent : 'space-around ', flexWrap : 'wrap'}}>

<div style={style.boxInput}>

<div style={style.label}>Vehiculo</div>
<input type="text"  style={style.input}/>

</div>


<div style={style.boxInput}>

<div style={style.label}>Año/Kilometraje</div>
<input type="text"  style={style.input}/>

</div>

<div style={style.boxInput}>    

<div style={style.label}>Plan</div>
<input type="text"  style={style.input}/>

</div>


<div style={style.boxInput}>

<div style={style.label}>Tipo de plan</div>
<input type="text"  style={style.input}/>

</div>

<div style={style.boxInput}>

<div style={style.label}>Requerimientos</div>
<input type="text"  style={style.input}/>

</div>

<div style={style.boxInput}>    

<div style={style.label}>Patente</div>
<input type="text"  style={style.input}/>

</div>


</div>

<div style={style.boxButton}>

<button onClick={()=>{alert('hello')}} style={Helpers.button}>Buscar plan</button>

</div>

</div>



  </div>;
};

export default Form;
