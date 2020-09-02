import React from "react";
import TopNav from "../Generic/TopNav/TopNav";
import "./Auth.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <section className="auth ">
        <TopNav />
        <div className="auth__content">
          <h2 className="auth__header"> Załóż konto </h2>

          <Formik
            initialValues={{
              email: "",
              password: "",
              passwordConfirmation: "",
            }}
            onSubmit={(values, { resetForm }) => {
              console.log(values);
              resetForm({ email: "", password: "", passwordConfirmation: "" });
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Podaj poprawny email!")
                .required("Podaj swój email!"),
              password: Yup.string()
                .min(6, "Hasło musi zawierać conajmniej 6 znaków")
                .required("Podaj swoje hasło!"),
              passwordConfirmation: Yup.string()
                .oneOf([Yup.ref("password"), null], "Hasła nie są zgodne!")
                .required("Potwierdź swoje hasło!"),
            })}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="auth__form ">
                  <label>
                    Email:
                    <Field
                      type="email"
                      name="email"
                      className={
                        errors.email && touched.email ? "alerted" : null
                      }
                    />
                    <p className="auth__error">
                      <ErrorMessage name="email" />
                    </p>
                  </label>
                  <label>
                    Hasło:
                    <Field
                      type="password"
                      name="password"
                      className={
                        errors.password && touched.password ? "alerted" : null
                      }
                    />
                    <p className="auth__error">
                      <ErrorMessage name="password" />
                    </p>
                  </label>
                  <label>
                    Powtórz hasło:
                    <Field
                      type="password"
                      name="passwordConfirmation"
                      className={
                        errors.passwordConfirmation &&
                        touched.passwordConfirmation
                          ? "alerted"
                          : null
                      }
                    />
                    <p className="auth__error">
                      <ErrorMessage name="passwordConfirmation" />
                    </p>
                  </label>
                </div>
                <div className="auth__buttons">
                  <Link to="/logowanie">
                    <button type="submit"> Zaloguj się </button>
                  </Link>
                  <button type="submit" className="primary-btn">
                    Załóż konto
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </>
  );
};

export default Register;
