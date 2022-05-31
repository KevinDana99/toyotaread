import React from 'react';
import style from './Board.style';



const Table = (props) => {

  const selectBox = (e) => {

    console.log(e,props.index, props.date)
    
    }


  return (
    <div style={{width: '100%',display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>


<div style={{width: '100%'}}>
  
<div style={{...style.boxTables, backgroundColor : 'rgb(255, 91, 91)', flexDirection: 'column'}}>
<div style={{display: 'flex'}}>


<div style={style.boxHora} onClick={(e)=>{selectBox(1)}}>-</div>
<div style={style.boxHora} onClick={(e)=>{selectBox(2)}}>-</div>
<div style={style.boxHora} onClick={(e)=>{selectBox(3)}}>-</div>
<div style={style.boxHora} onClick={(e)=>{selectBox(4)}}>-</div>
<div style={style.boxHora} onClick={(e)=>{selectBox(5)}}>-</div>
<div style={style.boxHora} onClick={(e)=>{selectBox(6)}}>-</div>
<div style={style.boxHora} onClick={(e)=>{selectBox(7)}}>-</div>
<div style={style.boxHora} onClick={(e)=>{selectBox(8)}}>-</div>
<div style={style.boxHora} onClick={(e)=>{selectBox(9)}}>-</div>
<div style={style.boxHora} onClick={(e)=>{selectBox(10)}}>-</div>
<div style={style.boxHora} onClick={(e)=>{selectBox(11)}}>-</div>
<div style={style.boxHora} onClick={(e)=>{selectBox(12)}}>-</div>
<div style={style.boxHora} onClick={(e)=>{selectBox(13)}}>-</div>
<div style={style.boxHora} onClick={(e)=>{selectBox(14)}}>-</div>
<div style={style.boxHora} onClick={(e)=>{selectBox(15)}}>-</div>
<div style={style.boxHora} onClick={(e)=>{selectBox(16)}}>-</div>
<div style={style.boxHora} onClick={(e)=>{selectBox(17)}}>-</div>
<div style={style.boxHora} onClick={(e)=>{selectBox(18)}}>-</div>
<div style={style.boxHora} onClick={(e)=>{selectBox(19)}}>-</div>
<div style={style.boxHora} onClick={(e)=>{selectBox(20)}}>-</div>

</div>

<div style={{display: 'flex'}}>

<div style={style.boxHora} onClick={(e)=>{selectBox(21)}}>-</div>
<div style={style.boxHora} onClick={(e)=>{selectBox(22)}}>-</div>
<div style={style.boxHora} onClick={(e)=>{selectBox(23)}}>-</div>
<div style={style.boxHora} onClick={(e)=>{selectBox(24)}}>-</div>
<div style={style.boxHora} onClick={(e)=>{selectBox(25)}}>-</div>
<div style={style.boxHora} onClick={(e)=>{selectBox(26)}}>-</div>
<div style={style.boxHora} onClick={(e)=>{selectBox(27)}}>-</div>
<div style={style.boxHora} onClick={(e)=>{selectBox(28)}}>-</div>
<div style={style.boxHora} onClick={(e)=>{selectBox(29)}}>-</div>
<div style={style.boxHora} onClick={(e)=>{selectBox(30)}}>-</div>
<div style={style.boxHora} onClick={(e)=>{selectBox(31)}}>-</div>
<div style={style.boxHora} onClick={(e)=>{selectBox(32)}}>-</div>
<div style={style.boxHora} onClick={(e)=>{selectBox(33)}}>-</div>
<div style={style.boxHora} onClick={(e)=>{selectBox(34)}}>-</div>
<div style={style.boxHora} onClick={(e)=>{selectBox(35)}}>-</div>
<div style={style.boxHora} onClick={(e)=>{selectBox(36)}}>-</div>
<div style={style.boxHora} onClick={(e)=>{selectBox(37)}}>-</div>
<div style={style.boxHora} onClick={(e)=>{selectBox(38)}}>-</div>
<div style={style.boxHora} onClick={(e)=>{selectBox(39)}}>-</div>
<div style={style.boxHora} onClick={(e)=>{selectBox(40)}}>-</div>

</div>


<div style={{display: 'flex'}}>

<div style={style.boxHora} onClick={(e)=>{selectBox(41)}}>-</div>
<div style={style.boxHora} onClick={(e)=>{selectBox(42)}}>-</div>
<div style={style.boxHora} onClick={(e)=>{selectBox(43)}}>-</div>
<div style={style.boxHora} onClick={(e)=>{selectBox(44)}}>-</div>
<div style={style.boxHora} onClick={(e)=>{selectBox(45)}}>-</div>
<div style={style.boxHora} onClick={(e)=>{selectBox(46)}}>-</div>
<div style={style.boxHora} onClick={(e)=>{selectBox(47)}}>-</div>
<div style={style.boxHora} onClick={(e)=>{selectBox(48)}}>-</div>
<div style={style.boxHora} onClick={(e)=>{selectBox(49)}}>-</div>
<div style={style.boxHora} onClick={(e)=>{selectBox(50)}}>-</div>
<div style={style.boxHora} onClick={(e)=>{selectBox(51)}}>-</div>
<div style={style.boxHora} onClick={(e)=>{selectBox(52)}}>-</div>
<div style={style.boxHora} onClick={(e)=>{selectBox(53)}}>-</div>
<div style={style.boxHora} onClick={(e)=>{selectBox(54)}}>-</div>
<div style={style.boxHora} onClick={(e)=>{selectBox(55)}}>-</div>
<div style={style.boxHora} onClick={(e)=>{selectBox(56)}}>-</div>
<div style={style.boxHora} onClick={(e)=>{selectBox(57)}}>-</div>
<div style={style.boxHora} onClick={(e)=>{selectBox(58)}}>-</div>
<div style={style.boxHora} onClick={(e)=>{selectBox(59)}}>-</div>
<div style={style.boxHora} onClick={(e)=>{selectBox(60)}}>-</div>
</div>


</div>




</div>

</div>


  )
}

export default Table