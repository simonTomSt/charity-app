import React from "react";
import { Link } from "react-router-dom";
const UserPanel = () => {
  return (
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
  );
};

export default UserPanel;
