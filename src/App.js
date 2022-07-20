import './App.css';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import { useState } from 'react';

function App() {
  const [alert,setAlert]=useState(null)
  const showAlert=(message,type)=>{
    setAlert({
    msg:message,
    type:type})
  setTimeout(() => {
    setAlert(null)
  }, 1500);

  }
  return (
  <>
  <NoteState>
  
   <Router>
 <Alert alert={alert}/>
 <div className="container">
 <Routes>
 <Route exact path="/" element={  <Home showAlert={showAlert}  />}></Route>
 </Routes>
 </div>

 </Router>
 </NoteState>

  </>
  );
}

export default App;
