import React from "react";
import "./HomeAchievements.scss";
const HomeAchievements = () => {
  return (
    <section className="achievements">
      <div className="container">
        <article className="achievements__box">
          <h3 className="achievements__number">10</h3>
          <h4 className="achievements__name">ODDANYCH WORKÓW</h4>
          <p className="achievements__message">
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma. Aliquam erat volutpat.
          </p>
        </article>
        <article className="achievements__box">
          <h3 className="achievements__number">5</h3>
          <h4 className="achievements__name">WSPARTYCH ORGANIZACJI</h4>
          <p className="achievements__message">
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma. Aliquam erat volutpat.
          </p>
        </article>
        <article className="achievements__box">
          <h3 className="achievements__number">7</h3>
          <h4 className="achievements__name">ZORGANIZOWANY ZBIÓREK</h4>
          <p className="achievements__message">
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma. Aliquam erat volutpat.
          </p>
        </article>
      </div>
    </section>
  );
};

export default HomeAchievements;
