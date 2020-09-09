import React, { useState } from "react";
import "../../Home/HomeHeader/HomeHeader.scss";
import { HashLink as Link } from "react-router-hash-link";
import UserPanel from "../UserPanel/UserPanel";
import HamburgerMenu from "react-hamburger-menu";

const HomeNav = () => {
  const [open, setopen] = useState(false);
  const handleHamburger = () => {
    setopen((prevState) => !prevState);
  };
  return (
    <nav className="nav">
      <div className="nav__actions">
        <UserPanel />
      </div>
      <HamburgerMenu
        className="nav__hamburger"
        isOpen={open}
        menuClicked={handleHamburger}
        width={35}
        height={25}
        strokeWidth={2}
        rotate={0}
        color="black"
        borderRadius={0}
        animationDuration={0.5}
      />

      <ul className={open ? "nav__menu opened" : "nav__menu"}>
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
