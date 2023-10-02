// import React from "react"
// import Navbar from "./components/Navbar"
//import Covid from "./components/covid"
import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Routes,
//   withRouter,
//   Link
// } from "react-router-dom";




const App = () => {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) =>{

    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
      
    }, 1500);

  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert('Dark mode has been enabled','success')
      document.title = 'Jayachandra - Darkmode'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode has been enabled','success')
      document.title = 'Jayachandra - Lightmode'
    }
  }

  return(
    <>
    {/* <Router> */}
      <Navbar title="Jayachandra" aboutText = "About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert = {alert}/>  
      <div className="container my-3">
        {/* <Switch>    */}
          
          {/* <Route path="/about">
            <About/>
          </Route> */}
          {/* <Route path="/"> */}
            <TextForm heading="Enter the text to analyze below" onShowAlert={showAlert}/>
          {/* </Route> */}
          
        {/* </Switch> */}
      </div>
   {/* </Router> */}
     
      
    
      
    </>
  )
}
export default App