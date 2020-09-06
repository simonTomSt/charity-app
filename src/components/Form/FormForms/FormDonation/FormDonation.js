import React, { useState, useEffect } from "react";
import "./FormDonation.scss";
const FormDonation = ({ typeDonation, setType, setStep }) => {
  const [alert, setalert] = useState(false);

  const setChecked = (clicked) => {
    document.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
      if (checkbox.value === clicked) {
        checkbox.checked = true;
      } else {
        checkbox.checked = false;
      }
    });
  };

  const handleChecked = (e) => {
    setType(e.target.value);
  };

  const handleNext = () => {
    if (!typeDonation) {
      setalert(true);
    } else {
      setStep((prevState) => prevState + 1);
    }
  };
  useEffect(() => {
    setChecked(typeDonation);
  }, [typeDonation]);

  return (
    <>
      <article className="main__warning">
        <div className="container">
          <h3 className="main__header">Ważne!</h3>
          <p className="main__warning-message">
            Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy
            wiedzieć komu najlepiej je przekazać.
          </p>
        </div>
      </article>
      <div className="main__screen">
        <div className="container">
          <p className="main__number">krok 1/4</p>
          <h3 className="main__header">Zaznacz co chcesz zrobić</h3>

          <form className="main__form main__form--donation">
            <label>
              <input
                type="checkbox"
                onChange={handleChecked}
                value=" ubrania, które
                nadają się do ponownego użycia"
              />
              ubrania, które nadają się do ponownego użycia
              <span className="checkmark"></span>
            </label>
            <label>
              <input
                type="checkbox"
                onChange={handleChecked}
                value="ubrania, do wyrzucenia"
              />
              ubrania, do wyrzucenia
              <span className="checkmark"></span>
            </label>
            <label>
              <input type="checkbox" onChange={handleChecked} value="zabawki" />
              zabawki
              <span className="checkmark"></span>
            </label>
            <label>
              <input type="checkbox" onChange={handleChecked} value="książki" />
              książki
              <span className="checkmark"></span>
            </label>
            <label>
              <input type="checkbox" onChange={handleChecked} value="Inne" />
              Inne
              <span className="checkmark"></span>
            </label>
            {alert && (
              <p className="main__alert one__alert">
                Musisz zaznaczyć co chcesz zrobić!
              </p>
            )}
          </form>
        </div>
        <div className="main__buttons container">
          <button className="primary-btn" onClick={handleNext}>
            Dalej
          </button>
        </div>
      </div>
    </>
  );
};

export default FormDonation;
