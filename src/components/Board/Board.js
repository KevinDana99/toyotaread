import React, {useState} from 'react';
import style from './Board.style';
import Table from './Table';
import {faCaretLeft, faCaretRight, faList, faPlus}  from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {date,getInitDay,restaDias,sumaDias,getDaysWeek,getWeeks,getWeekNext,getWeekBack,array_parse,getMes} from './Days.js';

const Board = () => {

  const [days,setDays] = useState({...getDaysWeek(), mes : `${getMes(new Date(getDaysWeek().miercoles).getMonth()+1)} (${new Date(getDaysWeek().miercoles).getFullYear()})`});


  const changeNextWeek = () => {

setDays(array_parse(getWeekNext()))

  }

  
  const changeBackWeek = () => {
  
  setDays(array_parse(getWeekBack()))
  
  }


  return <div>

    <div style={{width: '100%', height: '50px', display: 'flex', justifyContent: 'space-around', fontSize: '2rem', color : 'rgb(255, 91, 91)'}}>
      
<FontAwesomeIcon icon={faCaretLeft} onClick={changeBackWeek}/>

<div>{days.mes}</div>

 <FontAwesomeIcon icon={faCaretRight} onClick={changeNextWeek}/>
 
 
 
 </div>

<div style={style.container}>

<div style={{width: 'auto', height: '7%', backgroundColor : 'rgb(255, 91, 91)', color : 'white', display: 'flex', justifyContent: 'space-around', alignItems : 'center'}}>

<div style={{width : '10px'}}>Tablero</div>
<div style={{width: '30px'}}>M</div>
<div>8</div>
<div>9</div>
<div>10</div>
<div>11</div>
<div>12</div>
<div>13</div>
<div>14</div>
<div>15</div>
<div>16</div>
<div>17</div>
</div>


<div style={{width: 'auto', height: '93.2%' , display : 'flex', flexDirection: 'row'}}>

<div style={{width: '100px',height : '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around',alignItems: 'center', color : 'white', backgroundColor: 'rgb(255, 91, 91)'}}>
<div>L</div>
<div style={{width: '50px', height : '35px',backgroundColor: 'white', borderRadius : '1em', color : 'rgb(255, 91, 91)', display: 'flex', justifyContent : 'space-around', alignItems : 'center', alignItems : 'center'}}>{new Date(days.lunes).getDate()}</div>
<div>M</div>
<div style={{width: '50px', height : '35px',backgroundColor: 'white', borderRadius : '1em', color : 'rgb(255, 91, 91)', display: 'flex', justifyContent : 'space-around', alignItems : 'center', alignItems : 'center'}}>{new Date(days.martes).getDate()}</div>
<div>X</div>
<div style={{width: '50px', height : '35px',backgroundColor: 'white', borderRadius : '1em', color : 'rgb(255, 91, 91)', display: 'flex', justifyContent : 'space-around', alignItems : 'center', alignItems : 'center'}}>{new Date(days.miercoles).getDate()}</div>
<div>J</div>
<div style={{width: '50px', height : '35px',backgroundColor: 'white', borderRadius : '1em', color : 'rgb(255, 91, 91)', display: 'flex', justifyContent : 'space-around', alignItems : 'center', alignItems : 'center'}}>{new Date(days.jueves).getDate()}</div>
<div>V</div>
<div style={{width: '50px', height : '35px',backgroundColor: 'white', borderRadius : '1em', color : 'rgb(255, 91, 91)', display: 'flex', justifyContent : 'space-around', alignItems : 'center', alignItems : 'center'}}>{new Date(days.viernes).getDate()}</div>
<div>S</div>
<div style={{width: '50px', height : '35px',backgroundColor: 'white', borderRadius : '1em', color : 'rgb(255, 91, 91)', display: 'flex', justifyContent : 'space-around', alignItems : 'center', alignItems : 'center'}}>{new Date(days.sabado).getDate()}</div>
</div>

<div style={{ width : '185px', height : '100%', display : 'flex', flexDirection : 'column', justifyContent : 'space-between', color : 'rgb(255, 91, 91)'}}>


<div style={style.boxMecanico}>
<div>Mecanico</div>
<div>Mecanico</div>
<div>Mecanico</div>
</div>

<div style={style.boxMecanico}>
<div>Mecanico</div>
<div>Mecanico</div>
<div>Mecanico</div>
</div>

<div style={style.boxMecanico}>
<div>Mecanico</div>
<div>Mecanico</div>
<div>Mecanico</div>
</div>

<div style={style.boxMecanico}>
<div>Mecanico</div>
<div>Mecanico</div>
<div>Mecanico</div>
</div>

<div style={style.boxMecanico}>
<div>Mecanico</div>
<div>Mecanico</div>
<div>Mecanico</div>
</div>

<div style={style.boxMecanico}>
<div>Mecanico</div>
<div>Mecanico</div>
<div>Mecanico</div>
</div>

</div>

<div style={{...style.boxTables, flexDirection: 'column'}}>

<Table index={0} date={''}/>
<Table index={1} date={''}/>
<Table index={2} date={''}/>
<Table index={3} date={''}/>
<Table index={4} date={''}/>
<Table index={5} date={''}/>


</div>




</div>


  </div>

  </div>
};

export default Board;
