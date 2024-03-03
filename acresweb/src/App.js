import './App.css';
import EmployeeRegistration from './components/EmployeeRegisteration';
import TaskManagement from './components/TaskManagement';
import Login from './components/Login';
import { useState } from 'react';


function App() {
  const [showLogin,setShowLogin] = useState(true)
  const [showRegistration,setShowRegistration] = useState(false)
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  //return <TaskManagement/>
  //return<EmployeeRegistration/>
  return(
    <>
    <div id='header'>
      <button onClick={() =>{ 
      setShowLogin(true);
      setShowRegistration(false);
      }} className="Login-btn">Login</button>

     <button onClick={() => {
       setShowLogin(false);
       setShowRegistration(true);
      }} className="Signup-btn">Sign</button>
      </div>


    {showLogin?<Login/>:<></>}
    {showRegistration?<EmployeeRegistration/>:<></>}

  

    </>
  )
}

export default App;
