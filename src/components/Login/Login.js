
import style from './Login.styles';
import {React,useState} from 'react';
import { query } from '../../actions/Actions';

const Login = () => {

const [credentials,setCredentials] = useState(
{

user : '',
pass : ''

}

);

const verifyCredentials = async () => {

const res = await query({...credentials, action : 'login'});

console.log(await res)

}



return(

 <div style={style.container}>

 <div style={style.form}>
 
 <img src="assets/logo.png" style={style.logo}/>
 
 <div style={{display: 'flex', flexDirection : 'column', width : '300px', height : '150px', alignItems : 'center', justifyContent : 'space-around'}}>
 
 <input placeholder='Usuario' type="text" style={style.input} onChange={(e)=>{setCredentials({...credentials, user : e.target.value})}}/>
 
 <input placeholder='Contraseña' type="password" style={style.input} onChange={(e)=>{setCredentials({...credentials, pass : e.target.value})}}/>
 
 
 </div>
 
 <button style={style.button} onClick={verifyCredentials}>Entrar</button>
 
 </div>
 
  </div>

)
    
}

export default Login;