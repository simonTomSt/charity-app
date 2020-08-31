import React from "react";

import "./HomeAbout.scss";
import signature from "../../../assets/Signature.svg";
const HomeAbout = () => {
  return (
    <section className="about " id="o-nas">
      <div className="about__content">
        <h2 className="about__header">O nas </h2>
        <p className="about__text">
          Nori grape silver beet broccoli kombu beet greens fava bean potato
          quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil
          turnip greens parsnip.
          <img src={signature} alt="signature" className="about__signature" />
        </p>
      </div>
      <div className="about__img"></div>
    </section>
  );
};

export default HomeAbout;
