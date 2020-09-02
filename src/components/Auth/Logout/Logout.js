import React from "react";
import TopNav from "../../Generic/TopNav/TopNav";
import { Link } from "react-router-dom";
import "./Logout.scss";
const Logout = () => (
  <>
    <section className="logout">
      <TopNav />
      <div className="logout__content">
        <h2 className="logout__header"> Wylogowanie nastąpiło pomyślnie</h2>
        <Link to="/">
          <button className="primary-btn">Strona główna</button>
        </Link>
      </div>
    </section>
  </>
);

export default Logout;
