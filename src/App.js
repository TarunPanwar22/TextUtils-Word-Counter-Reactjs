import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'; 
import TextForm from './components/TextForm'
import React , { useState } from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  const [mode , setMode ] = useState('light')   // whether dark mode is enabled or not 
  const [alert , setAlert ] = useState(null);
  const showAlert = (message , type ) => {
   setAlert({
     msg : message , 
     type : type 

   })
   setTimeout(() => {
     setAlert(null);
   }, 2000);
   
  }
  const toggleMode = () => {
      if (mode === 'light'){ 
        setMode('dark');
        document.body.style.backgroundColor = '#042743';
        showAlert("Dark Mode has been enabled " , 'success');
        // document.title = 'TextUtils - Dark Mode'
      }
      else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enabled " , "success");
        // document.title = 'TextUtils - Light Mode'
      }

      // setInterval(() => {
      //   document.title = 'Install TextUtils Now '
      // }, 2000);

      // setInterval(() => {
      //   document.title = 'TextUtils - Light Mode'
      // }, 1500);

  }

  return (
    <>
    <Router>
 {/* <Navbar title="TextUtils2" aboutText="About TextUtils"/>  */}
 <Navbar title="TextUtils2" mode = {mode} toggleMode ={toggleMode}/> 
 <Alert alert ={alert}/>
 <Routes>
         <Route exact path="/" element={<TextForm showAlert = {showAlert} heading=" Try TextUtils - Word Counter , Character Counter , Remove Extra Spaces  " mode = {mode}/>} />
            {/* <About /> */}
          
          <Route exact path="/about" element={<About mode ={mode}/>} />
 {/* <TextForm showAlert = {showAlert} heading="Enter the text to analyze " mode = {mode} ></TextForm> */}
          </Routes>
        
 <div className="container my-3">
 </div>
 {/* <About/> */}
 {/* <Navbar/>    it gives any think value by default Props types value  */}
 </Router>
</>
   
  );
}
export default App;


