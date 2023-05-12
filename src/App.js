import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlertMsg] = useState(null);

  const toggleMode = (event) => {
    if(mode === 'dark' || mode === 'red' || mode === 'green' || mode === 'blue') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    } else {
      setMode(event.target.name);
      document.body.style.backgroundColor = event.target.name === "dark" ? "black" : event.target.name;
    }
  }

  const showAlertMsg = (message, type) => {
    setAlertMsg({
        message: message,
        type: type
      });

    setTimeout(() => setAlertMsg(null), 1500);
  }

  return (
    <>
      <BrowserRouter>
      <Navbar title="TextUtils" aboutText="About Utils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
          <Routes>
            <Route exact path='/about' element={<About mode={mode}/>}></Route>
            <Route exact path='/' element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlertMsg={showAlertMsg}/>}></Route>
          </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
