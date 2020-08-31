import React from "react";
import "./HomeSteps.scss";
import shirtIcon from "../../../assets/Icon-1.svg";
import bagIcon from "../../../assets/Icon-2.svg";
import searchIcon from "../../../assets/Icon-3.svg";
import reloadIcon from "../../../assets/Icon-4.svg";
import { Link } from "react-router-dom";

const HomeSteps = () => {
  return (
    <section className="steps" id="proste-kroki">
      <h2 className="steps__header">Wystarczą 4 proste kroki</h2>
      <div className="steps__content">
        <div className="container">
          <acricle className="steps__step">
            <h3 className="steps__icon">
              <img src={shirtIcon} alt="shirt icon" />
            </h3>
            <h4 className="steps__name">Wybierz rzeczy</h4>
            <p className="steps__message">ubrania, zabawki, sprzęt i inne</p>
          </acricle>
          <acricle className="steps__step">
            <h3 className="steps__icon">
              <img src={bagIcon} alt="shirt icon" />
            </h3>
            <h4 className="steps__name">Spakuj je</h4>
            <p className="steps__message">skorzystaj z worków na śmiecie</p>
          </acricle>
          <acricle className="steps__step">
            <h3 className="steps__icon">
              <img src={searchIcon} alt="shirt icon" />
            </h3>
            <h4 className="steps__name">Zdecyduj komu chcesz pomóc</h4>
            <p className="steps__message">wybierz zaufane miejsce</p>
          </acricle>
          <acricle className="steps__step">
            <h3 className="steps__icon">
              <img src={reloadIcon} alt="shirt icon" />
            </h3>
            <h4 className="steps__name">Zamów kuriera</h4>
            <p className="steps__message">
              kurier przyjedzie w dogodnym terminie
            </p>
          </acricle>
        </div>
      </div>
      <Link to="/logowanie">
        <button className="primary-btn steps__link">
          ODDAJ <br /> RZECZY
        </button>
      </Link>
    </section>
  );
};

export default HomeSteps;
