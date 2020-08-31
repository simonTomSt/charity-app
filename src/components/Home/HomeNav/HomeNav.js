import React from "react";
import "./HomeNav.scss";

import { Link as Scroll } from "react-scroll";
import UserPanel from "../../generic/UserPanel/UserPanel";
const HomeNav = () => {
  const scrollSettings = {
    className: "nav__item",
    activeClass: "active",
    spy: true,
    smooth: true,
    hashSpy: true,
    duration: 1000,
    delay: 200,
    isDynamic: true,
    offset: -70,
  };

  return (
    <nav className="nav">
      <div className="nav__actions">
        <UserPanel />
      </div>
      <ul className="nav__menu">
        <Scroll to="start" {...scrollSettings}>
          Start
        </Scroll>
        <Scroll to="steps" {...scrollSettings}>
          O co chodzi?
        </Scroll>
        <Scroll to="opening" {...scrollSettings}>
          O nas
        </Scroll>
        <Scroll to="opening" {...scrollSettings}>
          Fundacja i organizacje
        </Scroll>
        <Scroll to="opening" {...scrollSettings}>
          Kontakt
        </Scroll>
      </ul>
    </nav>
  );
};

export default HomeNav;
