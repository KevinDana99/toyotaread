import React, {useState} from 'react';
import Header from '../Header/Header';
import style from '../Dashboard/Dashboard.styles';
import Form from '../Form_plan/Form';
import Plan from '../Plan/Plan';
import Nav from '../Nav/Nav';
import Tasks from '../Tasks/Tasks';
import Board from '../Board/Board';


const Dashboard = (props) => {

  const [state,setState] = useState({});

  return <div style={{display: 'flex', flexDirection : 'column',width: '100%'}}>
      
    <Header/>

<div style={style.container}>

{props.render == 'Tasks' && <Tasks/> || props.render == 'Board' && <Board/> || props.render == 'Plan' && <Form/>}


<Nav/>

</div>
      
      </div>;
};

export default Dashboard;
