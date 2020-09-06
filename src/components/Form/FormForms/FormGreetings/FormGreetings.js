import React from "react";
import "./FormGreetings.scss";
const FormGreetings = ({ setStep }) => {
  return (
    <section className="main__screen">
      <div className="container greetings">
        <div className="greetings__content">
          <h2>
            Dziękujemy za rzesłanie formularza, na maila prześlemy wszelkie
            informacje o odbiorze{" "}
          </h2>
          <button className="primary-btn" onClick={() => setStep(1)}>
            Wyślij kolejny formularz
          </button>
        </div>
      </div>
    </section>
  );
};

export default FormGreetings;
