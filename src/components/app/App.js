import React, { useContext } from "react";
import Home from "../Home/Home";
import { Route } from "react-router-dom";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import Logout from "../Auth/Logout/Logout.js";
import { UserContext } from "./contexts/UserContext";
import NotFound from "../Generic/NotFound/NotFound";
import FormLanding from "../Form/FormLanding";

function App() {
  const [user] = useContext(UserContext);
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/logowanie" component={user ? NotFound : Login} />
      <Route exact path="/rejestracja" component={user ? NotFound : Register} />
      <Route
        exact
        path="/oddaj-rzeczy"
        component={user ? FormLanding : Login}
      />
      <Route exact path="/wylogowano" component={Logout} />
    </>
  );
}

export default App;
