import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

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
      <NavBar title="TextUtils ReactJS" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container mt-5">
        <TextForm mode={mode} showAlert={showAlert}/>
      </div>
  </>
  );
}

export default App;
