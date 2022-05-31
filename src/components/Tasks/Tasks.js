import React, {useState, useEffect} from 'react';
import Task from './Task';
import styleTask from './Task.style';
import {faCaretLeft, faCaretRight, faList, faPlus}  from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { query } from '../../actions/Actions';
import { convertDate } from '../../actions/convertDate';


let fecha = new Date();

let fechaNueva;

const todos = {

    "action" : "get",
    "id_user": 1,
  "date_task" : convertDate(fecha)
  
  }

 
const Tasks = () => {
  const [pending,setPending] = useState(false);
const [pendingTasks,setPendingTasks] = useState(false);
  const [actual, setActual] = useState(null);
const [allTask, setAllTask] = useState(null);

const addTodos = {
  "action" : "add",
   "id_user": 1,
   "type_task" : "",
   "title_task" : "",
   "task_body": "",
   "status" : "",
   "date" : actual ? todos.date_task  : convertDate(fecha)
}

const getTasks = async () => {

  const tasks = await query(todos);

return tasks;
}

useEffect(async()=> {


setAllTask(await getTasks());
updateTasks();

}, [])

const updateTasks = async () => {

setAllTask(await getTasks());
setPendingTasks(await query({action : 'pendingTasks'}))
}

const nextDay = async () => {

fecha.setDate(fecha.getDate() +1);

fechaNueva = convertDate(fecha);

setActual({fecha : fechaNueva})

todos.date_task = fechaNueva;

setAllTask(await getTasks())

}


const backDay = async () => {

  fecha.setDate(fecha.getDate() - 1);

  fechaNueva = convertDate(fecha);
  

  todos.date_task = fechaNueva;

  setAllTask(await getTasks())

}

if (pending == false){

  return <div style={styleTask.container}>


<div style={{width:'100%', height : '50px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginTop: '2%'}}>
<div onClick={()=>{setPending(true)}} style={{ cursor : 'pointer',display: 'flex', justifyContent : 'center',alignItems: 'center' , color : 'white', backgroundColor : 'rgb(255, 91, 91)', padding : '1%', borderRadius : '0.2em'}}><div style={{marginRight : '20px', display: 'flex', alignItems: 'center'}}>Tareas pendientes</div><FontAwesomeIcon icon={faList} /></div>
</div>


<div style={{marginTop : '5%', display : 'flex', justifyContent : 'space-around', alignItems : 'center'}}>

 <FontAwesomeIcon icon={faCaretLeft} style={{fontSize: '1.5rem', color: 'rgb(255, 91, 91)', cursor: 'pointer'}} onClick={()=>{backDay()}}/>

{new Date().getDate() == new Date(todos.date_task).getDate() ?  <h2 style={{minWidth : '100px'}}>Hoy</h2> :  <h2 style={{minWidth : '100px'}}>{new Date(todos.date_task).toLocaleDateString()}</h2> }


  <FontAwesomeIcon icon={faCaretRight} style={{fontSize: '1.5rem', color: 'rgb(255, 91, 91)', cursor: 'pointer'}}  onClick={()=>{nextDay()}}/>


  </div>

<div style={{...styleTask.boxTasks}}>

{!allTask ? <div>Esperando tareas</div> : allTask.map(e=>{

let f = JSON.parse(e);

return <Task title={f.title} task={f.task} status={f.status} id={f.id} updateTasks={updateTasks}/>

})}

<div style={{display: 'flex', justifyContent: 'flex-end'}}>
<FontAwesomeIcon icon={faPlus} style={{fontSize: '1.5rem', color: 'rgb(255, 91, 91)', cursor: 'pointer'}} onClick={async ()=>{await query(addTodos); setAllTask(await getTasks())}}/>
</div>
</div> 
  </div>;
  
}else {

return <div style={styleTask.container}>

<div style={{width:'100%', height : '50px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginTop: '3%', marginBottom: '5%'}}>
<div onClick={()=>{setPending(false)}} style={{ cursor : 'pointer',display: 'flex', justifyContent : 'center',alignItems: 'center' , color : 'white', backgroundColor : 'rgb(255, 91, 91)', padding : '1%', borderRadius : '0.2em'}}><div style={{marginRight : '20px', display: 'flex', alignItems: 'center'}}>Agenda</div><FontAwesomeIcon icon={faList} /></div>
</div>

<div style={{width: '100%', height: '50px', backgroundColor: 'rgb(255, 91, 91)', color : 'white', display : 'flex', justifyContent: 'space-around', alignItems: 'center'}}>


<div>Titulo</div>
<div>Tarea</div>
<div>Fecha inicio</div>
<div>Hora inicio</div>
<div>Fecha final</div>
<div>Hora final</div>
<div>Estado</div>

</div>

{!pendingTasks ? <div>Esperando tareas</div> : pendingTasks.map(e=>{

const f = JSON.parse(e);

  return <div style={{marginTop : '2px',widht : '100%', height : 'auto', minHeight : '50px',display: 'flex', justifyContent: 'space-around', alignItems: 'center', backgroundColor : 'white'}}>
    
    <div style={{width : '50px'}}>{f.title ? f.title : 'Nueva tarea'}</div>
<div style={{width : '150px'}}>{f.task}</div>
<div style={{width : '100px'}}>{f.initial_date}</div>
<div style={{width : '100px'}}>{f.initial_time}</div>
<div style={{width : '100px'}}>-</div>
<div style={{width : '100px'}}>-</div>
<div style={{width : '100px'}}>{f.status == 'pending' ? 'Pendiente' : f.status}</div> 
    {console.log(f)}
    
    </div>

})}


</div>

}

};

export default Tasks;
