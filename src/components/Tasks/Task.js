import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faHourglassStart, faTrash }  from '@fortawesome/free-solid-svg-icons';
import React, {useState} from 'react';
import styleTask from './Task.style';
import { query } from '../../actions/Actions';

const Task = (props) => {

const [state,setState] = useState({editTitle : false, edit : false, editCheck : false});
 const [todo, setTodo] = useState({
    
id : "",  
title : "",
content : "",
status : ""

})

const updateTask = async () => {

const res = await query({...todo, action : 'updateTask'});

props.updateTasks();
}

  return <div style={styleTask.task} >

<div style={{width : '100%', height : '50px',display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>

{state.editTitle == true ? <input style={{color : 'rgb(255, 91, 91)', fontSize : '1rem', fontWeight : 'bold', outline : 'none', border : 'none'}} type="text" value={todo.title} onBlur={()=>{setState({editTitle : false}); updateTask()}} onChange={(e)=>{setTodo({...todo, title : e.target.value, status : 'pending'})}}></input> :   <div><h4 style={{color : 'rgb(255, 91, 91)'}} onClick={(e)=>{setState({...state,editTitle : true}); setTodo({...todo, title : e.target.innerText, id : props.id})}}>{props.title || "Nueva tarea"}</h4></div>
    }
{

props.status == 'pending' ? 

<FontAwesomeIcon icon={faHourglassStart} style={{color : 'lightgrey', cursor : 'pointer'}}  onClick={async()=>{setTodo({...todo, id : props.id, status : 'complete'}); await updateTask()}}/>

:

<FontAwesomeIcon icon={faCheck} style={{color : 'rgb(255, 91, 91)', cursor : 'pointer'}}/>

}


</div>

<div style={{ display: 'flex', justifyContent: 'flex-start',minHeight: '130px'}}>

 {

 state.edit == true ? <textarea onBlur={()=>{setState({edit : false}); updateTask()}} style={{resize : 'none', border: 'none', outline : 'none', width : '100%', minHeight : '100px', height : 'auto', fontFamily : "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-serif"}} onChange={(e)=> {setTodo({...todo,content : e.target.value})}} value={todo.content}></textarea> : <p style={{fontSize : '0.8rem'}} onClick={(e)=> {setState({...state,edit : state.edit == false ? true : false}); setTodo({...todo, content : e.target.innerText, id : props.id, status : 'pending'})}}>
   
   {props.task || "Escribe una nueva tarea"}
   

    </p>

 }

</div>
  <div style={{display: 'flex', justifyContent: 'flex-end', }}>  
<FontAwesomeIcon icon={faTrash} style={{color : 'rgb(255, 91, 91)', cursor : 'pointer'}} onClick={async ()=> {await query({action : 'deleteTask', id : props.id}); props.updateTasks()}}/>

</div>
  </div>;
};

export default Task;
