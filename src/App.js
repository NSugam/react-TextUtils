import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import ContactPage from './components/ContactPage';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')

  const [alert, setAlert] = useState(null)

  const showAlert= (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);

  }

  const toggleMode = () => {

    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor="Black";
      showAlert("Dark mode Enabled", "dark");
    }
    
    else if (mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor="White";
      showAlert("Light mode Enabled", "primary");
    }
  }

  return (
  <>
    <Router>

      <NavBar title="TextUtils ReactJS" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
  
      <Routes>
        <Route exact path="/" element={<TextForm mode={mode} showAlert={showAlert}/>} />
        <Route exact path="/about" element={<ContactPage mode={mode}/>} />
      </Routes>

    </Router>

  </>
  );
}

export default App;
