import logo from './logo.svg';
import './App.css';
import { createContext,useContext } from 'react';
import Login from './components/loginComponent/login';


function App() {
  return (
    <div className="App">
      <h1 className='title'>To-do List Application</h1>
      <Login/>
    </div>
  
  );
}

export default App;
