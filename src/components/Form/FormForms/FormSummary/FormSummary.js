import React from "react";
import "./FormSummary.scss";
import clothesIcon from "../../../../assets/Icon-1.svg";
import locIcon from "../../../../assets/Icon-4.svg";
import firebase from "../../../app/config/Fire";
const FormSummary = ({
  setStep,
  typeDonation,
  amount,
  place,
  groupType,
  directPlace,
  consignor,
  settypeDonation,
  setamount,
  setplace,
  setgroupType,
  setdirectPlace,
  setconsignor,
}) => {
  const handleConfirm = () => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    firebase.firestore().collection("donations").add({
      email: user.email,
      typeDonation,
      amount,
      place,
      groupType,
      directPlace,
      consignor,
    });
    settypeDonation(null);
    setamount("wybierz");
    setplace("wybierz");
    setgroupType([]);
    setdirectPlace("");
    setconsignor({
      street: "",
      city: "",
      postcode: "",
      phone: "",
      date: "",
      time: "",
      comment: "",
    });
    setStep((prevState) => prevState + 1);
  };

  return (
    <div className="main__screen summary">
      <section className=" container">
        <h3 className="main__header">Podsumowanie Twojej darowizny</h3>
        <h4 className="summary__title">Oddajesz:</h4>
        <ul className="summary_donations">
          <li className="summary__donation">
            <img src={clothesIcon} alt="Ikona koszulki" />
            <p>
              {amount} worki, {typeDonation}, {groupType.join(", ")}
            </p>
          </li>
          <li className="summary__donation">
            <img src={locIcon} alt="Ikona lokalizacji" />
            {(place !== "wybierz" || directPlace) && (
              <p>
                {" "}
                {place !== "wybierz" && `dla lokalizacji: ${place}`}
                {directPlace && ` dla organizacji: ${directPlace}`}
              </p>
            )}
          </li>
        </ul>
        <div className="summary__details">
          <div className="column">
            <h4 className="summary__title"> Adres odbioru:</h4>
            <ul>
              <li>
                {" "}
                <p>Ulica</p>
                <p>{consignor.street}</p>
              </li>
              <li>
                {" "}
                <p>Miasto</p>
                <p>{consignor.city}</p>{" "}
              </li>
              <li>
                {" "}
                <p>Kod pocztowy</p>
                <p>{consignor.postcode}</p>{" "}
              </li>
              <li>
                {" "}
                <p>Numer Telefonu</p>
                <p>{consignor.phone}</p>{" "}
              </li>
            </ul>
          </div>
          <div className="column">
            <h4 className="summary__title"> Termin odbioru:</h4>
            <ul>
              <li>
                {" "}
                <p>Data</p>
                <p>{consignor.date}</p>
              </li>
              <li>
                {" "}
                <p>Czas</p>
                <p>{consignor.time}</p>{" "}
              </li>
              <li>
                {" "}
                <p>Uwagi dla kuriera</p>
                <p>{consignor.comment}</p>{" "}
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className="main__buttons container">
        <button
          type="button"
          className="primary-btn"
          onClick={() => setStep((prevState) => prevState - 1)}
        >
          Wstecz
        </button>
        <button className="primary-btn" onClick={handleConfirm}>
          Potwierdzam
        </button>
      </div>
    </div>
  );
};

export default FormSummary;
