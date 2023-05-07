import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

let modes = 'light';
if(localStorage.getItem('darkModeStatus')){
  modes = 'dark'
  document.body.style.backgroundColor = 'rgb(49 54 58)';
  changeColor();
}

function changeColor(){
  if(modes === 'light') {
   changePlaceholderColor("grey");
  }else{
   changePlaceholderColor("white");
  }
}

function  changePlaceholderColor(toColor) {
 const addCSS = document.createElement('style');
 addCSS.innerHTML = "::placeholder { color: " + toColor + "!important;  }";
 document.body.append(addCSS);
}

function App() {
  const [mode, setMode] = useState(modes); //dark mode control
  const [alert, setAlert] = useState(null); // Now alert is an object

  setInterval(()=>{
    document.title = 'Hello World!';
    
  }, 1000);

  setInterval(()=>{
    document.title = 'Bye World';
  }, 2000);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    },1500)
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode("dark");
      modes="dark";
      document.body.style.backgroundColor = 'rgb(49 54 58';
      localStorage.setItem('darkModeStatus', 'true');
      changeColor();
      showAlert("Dark mode has been enabled", "success");
      // document.title = "WordCompute - DarkMode"; --> Change title of web document
    }else{
      setMode("light");
      modes="light";
      document.body.style.backgroundColor = 'white';
      localStorage.removeItem('darkModeStatus');
      changeColor();
      showAlert("Light mode has been enabled", "success");
      // document.title = "WordCompute - LightMode";  --> Change title of web document
    }
  }

  // function changeBodyBackground(bodyColor){
  //   document.body.style.backgroundColor = bodyColor;
  // }

  return (
    <>
      <Router>
        <Navbar title="WordCompute" mode={mode} toggleMode={toggleMode} checked="checked" aboutText="About Us"/>
        <Alert alert={alert}/>

      <div className="container">
        <Routes>
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/" element={<TextForm heading="Type Your Text In The Box" mode={mode} showingAlert={showAlert}/>} />
        </Routes>
      </div>

      </Router>
      
    </>
    
  );
}

export default App;