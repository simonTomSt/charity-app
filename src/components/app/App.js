import React from "react";
import Home from "../Home/Home";
import { Route } from "react-router-dom";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/logowanie" component={Login} />
      <Route exact path="/rejestracja" component={Register} />
    </>
  );
}

export default App;
