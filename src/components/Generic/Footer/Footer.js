import React from "react";
import facebook from "../../../assets/Facebook.svg";
import instagram from "../../../assets/Instagram.svg";
import "./Footer.scss";
const Footer = () => {
  return (
    <section className="footer">
      <span className="footer__copyright">Copyright by Coders Lab</span>
      <div className="footer__icons">
        <img src={facebook} alt="Facebook icon" />
        <img src={instagram} alt="Instagram Icon" />
      </div>
    </section>
  );
};

export default Footer;
