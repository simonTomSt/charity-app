import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../app/contexts/UserContext";
import firebase from "../../app/config/Fire";
const UserPanel = () => {
  const history = useHistory();
  const [user, setUser] = useContext(UserContext);

  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        sessionStorage.setItem("user", false);
        setUser(false);
      })
      .catch(function (error) {
        console.log(error);
      });
    history.push("/wylogowano");
  };

  return (
    <>
      {user ? (
        <>
          <p className="nav__name">
            Cześć <span>{user.email}</span>
          </p>
          <Link to="/oddaj-rzeczy">
            <button className="nav__button nav__button--highlighted">
              Oddaj rzeczy
            </button>
          </Link>
          <Link to="#">
            <button className="nav__button " onClick={handleLogout}>
              Wyloguj
            </button>
          </Link>
        </>
      ) : (
        <>
          <Link to="/logowanie">
            <button className="nav__button">Zaloguj</button>
          </Link>
          <Link to="/rejestracja">
            <button className="nav__button nav__button--highlighted">
              Załóż konto
            </button>
          </Link>
        </>
      )}
    </>
  );
};

export default UserPanel;
