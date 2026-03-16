import React from "react";
import "./Footer.css";
import handImg from "../assets/hand.png"; // bottom right image
import bgImage from "../assets/footer-bg.png"; // background image (optional)

const Footer = () => {
  return (
    <footer className="footer">

      {/* Background Image Layer */}
      <div
        className="footer-bg"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      <div className="footer-content">

        {/* Left Section */}
        <div className="footer-left">
          <h2>
            AVAILABLE FOR ALL <br /> SELECT PROJECTS
          </h2>

          <div className="footer-meta">
            <span>© 2026, Influenso Influencer Marketing</span>
            <span>India, lorem Ipsum</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <div className="footer-menu">
            <h4>MENU</h4>
            <a href="#">Projects</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>

          <div className="footer-socials">
            <h4>SOCIALS</h4>
            <a href="#">LinkedIn</a>
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
          </div>
        </div>
      </div>

      {/* Big Background Text */}
      <div className="footer-brand">
        TAKA
      </div>

      {/* Bottom Right Image */}
      <img src={handImg} alt="Decorative" className="footer-hand" />

    </footer>
  );
};

export default Footer;