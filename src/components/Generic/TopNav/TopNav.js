import React from "react";
import "../../Home/HomeHeader/HomeHeader.scss";
import { HashLink as Link } from "react-router-hash-link";
import UserPanel from "../UserPanel/UserPanel";

const HomeNav = () => {
  return (
    <nav className="nav">
      <div className="nav__actions">
        <UserPanel />
      </div>
      <ul className="nav__menu">
        <Link className="nav__item" to="/#start">
          Start
        </Link>
        <Link className="nav__item" to="/#proste-kroki">
          O co chodzi?
        </Link>
        <Link className="nav__item" to="/#o-nas">
          O nas
        </Link>
        <Link className="nav__item" to="/#who-we-help">
          Fundacja i organizacje
        </Link>
        <Link className="nav__item" to="/#kontakt">
          Kontakt
        </Link>
      </ul>
    </nav>
  );
};

export default HomeNav;
