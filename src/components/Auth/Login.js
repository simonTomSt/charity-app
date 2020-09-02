import React from "react";
import TopNav from "../Generic/TopNav/TopNav";
import "./Auth.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <section className="auth ">
        <TopNav />
        <div className="auth__content">
          <h2 className="auth__header"> Zaloguj się </h2>

          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values, { resetForm }) => {
              console.log(values);
              resetForm({ email: "", password: "" });
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Podaj poprawny email!")
                .required("Podaj swój email!"),
              password: Yup.string()
                .min(6, "Hasło musi zawierać conajmniej 6 znaków")
                .required("Podaj swoje hasło!"),
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
                </div>
                <div className="auth__buttons">
                  <Link to="/rejestracja">
                    <button type="submit"> Załóż konto </button>
                  </Link>
                  <button type="submit" className="primary-btn">
                    Zaloguj się
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

export default Login;
