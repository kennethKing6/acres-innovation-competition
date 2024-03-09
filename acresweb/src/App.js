import './App.css';
import myImage from '/Users/shubham/Documents/acres-innovation-competition/acresweb/src/assets/ACR-logo-web-2022.png'
import EmployeeRegistration from './components/EmployeeRegisteration';
import TaskManagement from './components/TaskManagement';
import Login from './components/Login';
import { useState } from 'react';
import AdminDashboard from './components/AdminDashboard';


function App() {
  const [showLogin,setShowLogin] = useState(true)
  const [showRegistration,setShowRegistration] = useState(false)
  
    const buttonStyles = {
      margin: '10px 240px 0px 110px', // Add some space between buttons
      padding: '10px 20px', // Adjust padding for a better look and feel
      fontSize: '16px', // Set the font size
      fontWeight: 'bold', // Make the text bold
      borderRadius: '5px', // Add rounded corners
      cursor: 'pointer', // Show pointer cursor on hover
      backgroundColor: 'grey'
     
    }
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
    {/* <div id='header'>
      <button onClick={() =>{ 
      setShowLogin(true);
      setShowRegistration(false);
      }} 
       className="Login-btn">Login</button>
      <WidthSpace></WidthSpace>
      <WidthSpace></WidthSpace>

     <button style={buttonStyles} onClick={() => {
       setShowLogin(false);
       setShowRegistration(true);
      }} className="Signup-btn">Sign</button>
      </div>

      </div>


    {showLogin?<Login/>:<></>}
    {showRegistration?<EmployeeRegistration/>:<></>} */}

    <AdminDashboard/>

    </>
  )
}

export default App;
