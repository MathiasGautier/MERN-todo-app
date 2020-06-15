import React from 'react';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Home from './Components/Home';
import Register from "./Components/Register";
import Todos from "./Components/Todos";
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
     <div className="container">
    <Router>
        <Navbar/>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/todos" component={Todos}/>
    </Router>
     </div>
  );
}

export default App;
