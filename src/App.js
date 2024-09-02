
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom"
function App() {
  const [alert, setalert] = useState(null)
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }
  const [mode, setMode] = useState('light') //whether dark mode is enabled or not
  const toggle = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      document.body.style.color = 'white'
      showAlert(': Dark Mode has been enabled', 'success')
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert(': Light Mode has been enabled', 'success')
    }
  }
  return (
    <>
      <Navbar title="Text-utils" navItem1="Home" navItem2="About us" mode={mode} toggle={toggle} />
      <Alert alert={alert} />
      <Router>
        <div className="container">
          <Routes>
            <Route path='/about' element={<About mode={mode} toggle={toggle} />} />
            <Route path='/' element={<Form heading="Enter your Text" showAlert={showAlert} mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
