import React from "react";
import "./TopNav.scss";
import UserPanel from "../UserPanel/UserPanel";
import { Link as Scroll } from "react-scroll";
const TopNav = () => {
  const scrollSettings = {
    className: "header__item",
    spy: true,
    smooth: true,
    hashSpy: true,
    duration: 1000,
    delay: 200,
    isDynamic: true,
    offset: -70,
  };

  return (
    <section className="header">
      <div className="header__actions">
        <UserPanel />
      </div>
      <nav className="header__nav">
        <ul className="header__menu">
          <Scroll to="opening" {...scrollSettings}>
            Start
          </Scroll>
          <Scroll to="opening" {...scrollSettings}>
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
    </section>
  );
};

export default TopNav;
