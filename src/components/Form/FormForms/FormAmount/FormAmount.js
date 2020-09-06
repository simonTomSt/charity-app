import React, { useState } from "react";
import "./FormAmount.scss";
import arrowDown from "../../../../assets/Icon-Arrow-Down.svg";
import arrowUp from "../../../../assets/Icon-Arrow-Up.svg";

const FormAmount = ({ amount, setAmount, setStep }) => {
  const [opened, setopened] = useState(false);
  const [alert, setalert] = useState(false);

  const handleNext = () => {
    if (amount !== "wybierz") {
      setStep((prevState) => prevState + 1);
    } else {
      setalert(true);
    }
  };
  const handleSelectItem = (e) => {
    setAmount(e.target.value);
  };

  return (
    <>
      <article className="main__warning">
        <div className="container">
          <h3 className="main__header">Ważne!</h3>
          <p className="main__warning-message">
            Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję
            jak poprawnie spakować rzeczy znajdziesz{" "}
            <a
              href="https://www.discovermygoodwill.org/donate/material-donations/"
              rel="noopener noreferrer"
              target="_blank"
            >
              TUTAJ
            </a>
            .
          </p>
        </div>
      </article>
      <div className="main__screen">
        <div className="container">
          <p className="main__number">krok 2/4</p>
          <h3 className="main__header">
            Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:
          </h3>

          <form className="main__form amount">
            <label>
              Liczba 60l worków:
              <div
                className="custom-select"
                onClick={() => setopened((prevState) => !prevState)}
              >
                <p> {amount} </p>
                {!opened ? (
                  <img src={arrowDown} alt="select down" />
                ) : (
                  <img src={arrowUp} alt="select up" />
                )}

                {opened && (
                  <ul>
                    {" "}
                    <li onClick={handleSelectItem} value="1">
                      1
                    </li>
                    <li onClick={handleSelectItem} value="2">
                      2
                    </li>
                    <li onClick={handleSelectItem} value="3">
                      3
                    </li>
                    <li onClick={handleSelectItem} value="4">
                      4
                    </li>
                    <li onClick={handleSelectItem} value="5">
                      5
                    </li>{" "}
                  </ul>
                )}
              </div>
            </label>
            {alert && (
              <p className="main__alert one__alert"> Wybierz liczbę worków! </p>
            )}
          </form>
        </div>
        <div className="main__buttons container">
          <button
            className="primary-btn"
            onClick={() => setStep((prevState) => prevState - 1)}
          >
            Wstecz
          </button>
          <button className="primary-btn" onClick={handleNext}>
            Dalej
          </button>
        </div>
      </div>
    </>
  );
};

export default FormAmount;
