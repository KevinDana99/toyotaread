import './App.css';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {

  return (
    <div className="App">

<HashRouter>

<Routes>
<Route path={'/'} element={<Dashboard render={'Tasks'}/>}/>
<Route path='/board' element={<Dashboard render={'Board'}/>}/>
<Route path={'/tasks'} element={<Dashboard render={'Tasks'}/>}/>
<Route path={'/plan'} element={<Dashboard render={'Plan'}/>}/>
<Route path='/login' element={<Login/>}/>



</Routes>

</HashRouter>

    </div>
  );
}

export default App;
