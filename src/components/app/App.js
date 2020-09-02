import React from "react";
import Home from "../Home/Home";
import { Route } from "react-router-dom";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import Logout from "../Auth/Logout/Logout.js";
function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/logowanie" component={Login} />
      <Route exact path="/rejestracja" component={Register} />
      <Route exact path="/wylogowano" component={Logout} />
    </>
  );
}

export default App;
