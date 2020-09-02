import React, { useContext } from "react";
import TopNav from "../Generic/TopNav/TopNav";
import "./Auth.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useHistory } from "react-router-dom";
import firebase from "../app/config/Fire";
import { UserContext } from "../app/contexts/UserContext";

const Login = () => {
  const [user, setUser] = useContext(UserContext);
  const history = useHistory();
  return (
    <>
      <section className="auth ">
        <TopNav />
        <div className="auth__content">
          <h2 className="auth__header"> Zaloguj się </h2>

          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values, { resetForm }) => {
              const { email, password } = values;
              firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then((response) => {
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
