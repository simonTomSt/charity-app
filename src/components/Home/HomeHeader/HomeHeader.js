import React from "react";
import "./HomeHeader.scss";
import HomeNav from "../HomeNav/HomeNav";
import { Link } from "react-router-dom";
const HomeHeader = () => {
  return (
    <section className="header" id="start">
      <div className="container">
        <HomeNav />

        <div className="header__content">
          <h2 className="header__slogan">
            Zacznij pomagać! <br /> Oddaj niechciane rzeczy w zaufane ręce
          </h2>
          <div className="header__buttons">
            <Link to="/login">
              <button className="primary-btn ">
                ODDAJ <br /> RZECZY
              </button>
            </Link>
            <Link to="/login">
              <button className="primary-btn ">
                ZORGANIZUJ <br /> ZBIÓRKĘ
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeader;
