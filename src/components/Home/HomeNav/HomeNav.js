import React, { useState } from "react";
import "./HomeNav.scss";
import HamburgerMenu from "react-hamburger-menu";
import { Link as Scroll } from "react-scroll";
import UserPanel from "../../Generic/UserPanel/UserPanel";
const HomeNav = () => {
  const [open, setopen] = useState(false);

  const scrollSettings = {
    className: "nav__item",
    activeClass: "active",
    spy: true,
    smooth: true,
    hashSpy: true,
    duration: 1000,
    delay: 200,
    isDynamic: true,
    offset: 40,
  };

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
        <Scroll to="start" {...scrollSettings}>
          Start
        </Scroll>
        <Scroll to="proste-kroki" {...scrollSettings}>
          O co chodzi?
        </Scroll>
        <Scroll to="o-nas" {...scrollSettings}>
          O nas
        </Scroll>
        <Scroll to="who-we-help" {...scrollSettings}>
          Fundacja i organizacje
        </Scroll>
        <Scroll to="kontakt" {...scrollSettings}>
          Kontakt
        </Scroll>
      </ul>
    </nav>
  );
};

export default HomeNav;
