import './App.css';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Alert from './components/Alert';

function App() {

  
  return (
  <>
  
   <Router>
 <Alert/>
 <div className="container">
 <Routes>
 <Route exact path="/" element={  <Home  />}></Route>
 </Routes>
 </div>
 </Router>

  </>
  );
}

export default App;
