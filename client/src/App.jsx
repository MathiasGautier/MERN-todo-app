import React from "react";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Todos from "./Components/Todos";
import Admin from "./Components/Admin";
import PrivateRoute from "./higher-order-components/PrivateRoute";
import UnPrivateRoute from "./higher-order-components/UnPrivateRoute";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Route exact path="/" component={Home} />
        <UnPrivateRoute path="/login" component={Login} />
        <UnPrivateRoute path="/register" component={Register} />
        <PrivateRoute path="/todos" roles={["user", "admin"]} component={Todos} />
        <PrivateRoute path="/admin" roles={["admin"]} component={Admin} />
      </Router>
    </div>
  );
}

export default App;
