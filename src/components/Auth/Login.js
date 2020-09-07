import React, { useContext } from "react";
import TopNav from "../Generic/TopNav/TopNav";
import "./Auth.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useHistory } from "react-router-dom";
import firebase from "../app/config/Fire";
import { UserContext } from "../app/contexts/UserContext";
import { useState } from "react";
import Loading from "../Generic/Loading/Loading";

const Login = () => {
  const [user, setUser] = useContext(UserContext);
  const history = useHistory();
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);
  return (
    <>
      <section className="auth ">
        <TopNav />
        <div className="auth__content">
          <h2 className="auth__header"> Zaloguj się </h2>

          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values, { resetForm }) => {
              setloading(true);
              seterror(null);
              const { email, password } = values;
              firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then((response) => {
                  setloading(false);
                  const respUser = {
                    isLogged: true,
                    email: response.user.email,
                    id: response.user.uid,
                  };
                  sessionStorage.setItem("user", JSON.stringify(respUser));
                  setUser(JSON.parse(sessionStorage.getItem("user")));
                  history.push("/");
                })

                .catch(function (error) {
                  setloading(false);
                  if (error.code === "auth/user-not-found") {
                    seterror("Niepoprawny email!");
                  } else if (error.code === "auth/wrong-password") {
                    seterror("Niepoprawne hasło!");
                  } else {
                    seterror("Niepoprawne dane logowania!");
                  }
                  console.log(error);
                });
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
                {error && (
                  <p
                    className="auth__error"
                    style={{ textAlign: "center", marginBottom: "15px" }}
                  >
                    {" "}
                    {error}{" "}
                  </p>
                )}
                {loading ? (
                  <Loading />
                ) : (
                  <>
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
                            errors.password && touched.password
                              ? "alerted"
                              : null
                          }
                        />
                        <p className="auth__error">
                          <ErrorMessage name="password" />
                        </p>
                      </label>
                    </div>
                    <div className="auth__buttons">
                      <Link to="/rejestracja">
                        <button type="button"> Załóż konto </button>
                      </Link>

                      <button type="submit" className="primary-btn">
                        Zaloguj się
                      </button>
                    </div>
                  </>
                )}
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </>
  );
};

export default Login;
