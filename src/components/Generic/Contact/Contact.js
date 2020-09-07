import React, { useState } from "react";
import "./Contact.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Axios from "axios";
import Footer from "../Footer/Footer";
import Loading from "../Loading/Loading";

const Contact = () => {
  const [responseMessage, setresponseMessage] = useState(null);
  const [loading, setloading] = useState(false);
  const sentForm = (data) => {
    setloading(true);
    Axios({
      method: "post",
      url: "https://fer-api.coderslab.pl/v1/portfolio/contact",
      data: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        setloading(false);
        console.log(response);
        setresponseMessage("success");
      })
      .catch((error) => {
        setloading(false);
        console.log(error);
        setresponseMessage("errors");
      });
  };

  return (
    <section className="contact" id="kontakt">
      <div className="contact__content">
        <h2 className="contact__header">Skontaktuj się z nami</h2>
        {loading && <Loading />}
        {responseMessage && (
          <div className="contact__response">
            {responseMessage === "success" ? (
              <span style={{ color: "green" }}>
                Wiadomość została wysłana! Wkrótce sie z Tobą skontaktujemy.{" "}
              </span>
            ) : (
              <span style={{ color: "red" }}>
                Błąd wysłannia wiadomości! Spróbuj jeszcze raz.{" "}
              </span>
            )}
          </div>
        )}
        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          onSubmit={(values, { resetForm }) => {
            sentForm(values);
            resetForm({ name: "", email: "", message: "" });
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .trim()
              .max(15, "Imię nie może zawierać więcej niż 15 znaków !")
              .matches(/^[A-Z]+$/gi, "Niepoprawne imię!")
              .required("Podaj swoje imię!"),
            email: Yup.string()
              .email("Podaj poprawny email!")
              .required("Podaj swój email!"),
            message: Yup.string()
              .min(120, "Wiadomość musi zawierać min. 120 znaków!")
              .required("Wpisz swoją wiadomość!"),
          })}
        >
          {({ errors, touched }) => (
            <Form className="contact__form">
              <label className="contact__label">
                Wpisz swoje imię
                <Field
                  type="text"
                  name="name"
                  id="name"
                  className={errors.name && touched.name ? "alerted" : null}
                />
                <p className="contact__error">
                  <ErrorMessage name="name" />
                </p>
              </label>
              <label className="contact__label">
                Wpisz swój email
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className={errors.email && touched.email ? "alerted" : null}
                />
                <p className="contact__error">
                  <ErrorMessage name="email" />
                </p>
              </label>
              <label className="contact__label contact__label--message">
                Wpisz swoją wiadomość
                <Field
                  as="textarea"
                  type="text"
                  name="message"
                  id="message"
                  className={
                    errors.message && touched.message ? "alerted" : null
                  }
                />
                <p className="contact__error">
                  <ErrorMessage name="message" />
                </p>
              </label>
              <button type="submit" className="primary-btn contact__btn ">
                Wyślij
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
