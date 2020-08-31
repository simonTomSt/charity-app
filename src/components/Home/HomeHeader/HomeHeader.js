import React from "react";
import "./HomeHeader.scss";
import HomeNav from "../HomeNav/HomeNav";
const HomeHeader = () => {
  return (
    <section className="header" id="header">
      <div className="container">
        <HomeNav />
      </div>
    </section>
  );
};

export default HomeHeader;
