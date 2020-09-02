import React from "react";
import TopNav from "../..//Generic/TopNav/TopNav";
import "./FormStart.scss";
const FormStart = () => {
  return (
    <section className="opening">
      <div className="container">
        <TopNav />
        <div className="opening__content">
          <h2 className="opening__header">
            Oddaj rzeczy, których już nie chcesz POTRZEBUJĄCYM
          </h2>
          <h3 className="opening__slogan">Wystarczą 4 proste kroki:</h3>
          <div className="opening__steps">
            <div className="opening__step">
              <h4 className="opening__number">1</h4>
              <p className="opening__intruction">Wybierz rzeczy</p>
            </div>
            <div className="opening__step">
              <h4 className="opening__number">2</h4>
              <p className="opening__intruction">Spakuj je w worki</p>
            </div>
            <div className="opening__step">
              <h4 className="opening__number">3</h4>
              <p className="opening__intruction">Wybierz fundacje</p>
            </div>
            <div className="opening__step">
              <h4 className="opening__number">4</h4>
              <p className="opening__intruction">Zamów kuriera</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormStart;
