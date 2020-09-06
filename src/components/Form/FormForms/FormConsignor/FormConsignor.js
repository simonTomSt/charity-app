import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./FormConsignor.scss";
import * as Yup from "yup";

const FormConsignor = ({ setStep, setconsignor, consignor }) => {
  const setCurrDate = (type) => {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();

    if (dd < 10) {
      dd = "0" + dd;
    }

    if (mm < 10) {
      mm = "0" + mm;
    }
    if (type === "min") {
      return (today = yyyy + "-" + mm + "-" + dd);
    } else {
      return (today = yyyy + "-" + mm + 2 + "-" + dd);
    }
  };
  console.log(setCurrDate());
  return (
    <>
      {" "}
      <article className="main__warning">
        <div className="container">
          <h3 className="main__header">Ważne!</h3>
          <p className="main__warning-message">
            Podaj adres oraz termin odbioru rzeczy.
          </p>
        </div>
      </article>
      <div className="main__screen">
        <div className="container">
          <p className="main__number">krok 4/4</p>
          <h3 className="main__header">
            Podaj adres oraz termin odbioru rzecz przez kuriera
          </h3>
          <Formik
            initialValues={{ ...consignor }}
            validationSchema={Yup.object({
              street: Yup.string()
                .min(3, "Musi zawierać min 3 znaki!")
                .required("Poda swoją ulicę!"),
              city: Yup.string()
                .min(3, "Musi zawierać min 3 znaki!")
                .required("Poda swoje miasto!"),
              postcode: Yup.string()
                .matches(
                  /^([0-9]{2})(-[0-9]{3})?$/i,
                  "Podaj poprawny kod pocztowy! "
                )
                .required("Pdaj swój kod pocztowy!"),
              phone: Yup.string()
                .matches(
                  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
                  "Podaj poprawny numer telefonu! "
                )
                .required("Pdaj swój numer telefonu!"),
              date: Yup.string().required("Podaj termin dla kuriera!"),
              time: Yup.string().required(
                "Podaj przybliżoną godzinę dla kuriera!"
              ),
              comment: Yup.string().min(
                10,
                "Twoja wiadomość musi zawierać pprzynajmniej 10 znaków!"
              ),
            })}
            onSubmit={(values) => {
              setconsignor(values);
              setStep((prevState) => prevState + 1);
            }}
          >
            <Form className="main__form  consignor">
              <div className="column">
                <h4>Adres Odbioru:</h4>
                <label>
                  <span>Ulica</span>
                  <Field name="street" />

                  <ErrorMessage
                    component="p"
                    className="main__alert"
                    name="street"
                  />
                </label>
                <label>
                  <span>Miasto</span>
                  <Field name="city" />
                  <ErrorMessage
                    component="p"
                    className="main__alert"
                    name="city"
                  />
                </label>
                <label>
                  <span> Kod pocztowy</span>
                  <Field name="postcode" />
                  <ErrorMessage
                    component="p"
                    className="main__alert"
                    name="postcode"
                  />
                </label>
                <label>
                  <span>Numer telefonu</span>
                  <Field type="tel" name="phone" />
                  <ErrorMessage
                    component="p"
                    className="main__alert"
                    name="phone"
                  />
                </label>
              </div>
              <div className="column">
                <h4>Termin odbioru:</h4>
                <label>
                  <span>Data</span>
                  <Field
                    type="date"
                    name="date"
                    min={setCurrDate("min")}
                    max={setCurrDate("max")}
                  />
                  <ErrorMessage
                    component="p"
                    className="main__alert"
                    name="date"
                  />
                </label>
                <label>
                  <span>Godzina</span>
                  <Field type="time" name="time" />
                  <ErrorMessage
                    component="p"
                    className="main__alert"
                    name="time"
                  />
                </label>
                <label>
                  <span>Uwagi dla kuriera</span>
                  <Field as="textarea" name="comment" />
                  <ErrorMessage
                    component="p"
                    className="main__alert"
                    name="comment"
                  />
                </label>
              </div>
              <div className="main__buttons container">
                <button
                  type="button"
                  className="primary-btn"
                  onClick={() => setStep((prevState) => prevState - 1)}
                >
                  Wstecz
                </button>
                <button className="primary-btn" type="submit">
                  Dalej
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default FormConsignor;
