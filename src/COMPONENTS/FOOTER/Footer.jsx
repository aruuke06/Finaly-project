import React from "react";
import "./footer.css";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaTelegram
} from "react-icons/fa";

import footerBg from "../../SVG/footer.svg";
import logo from "../../SVG/list.svg";

function Footer() {
  return (
    <footer className="footer">

      
      <div className="newsletter">
        <img src={footerBg} alt="Newsletter" />

        <div className="newsletter-content">
          <h2>
            Subscribe to <br /> our Newsletter
          </h2>

          <div className="newsletter-form">
            <input type="email" placeholder="Your Email Address" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer-content">
        <div className="footer-col">
          <h3>Contact Us</h3>
          <p><span>Email:</span></p>
          <p><span>Whatsapp:</span> +996 550219237</p>
          <p><span>Address:</span>Turusbekova 109/1</p>
        </div>

        <div className="footer-center">
          <img src={logo} alt="Organick" />
          <h2>Organick</h2>

          <p>
            Simply dummy text of the printing and typesetting industry.
            Lorem Ipsum simply dummy text of the printing.
          </p>

          <div className="footer-socials">
            <FaInstagram />
            <FaFacebook />
            <FaTwitter />
            <FaPinterest />
            <FaTelegram />
          </div>
        </div>

        <div className="footer-col">
          <h3>Utility Pages</h3>
          <ul>
            <li>Style Guide</li>
            <li>404 Not Found</li>
            <li>Password Protected</li>
            <li>Licences</li>
            <li>Changelog</li>
          </ul>
        </div>
      </div>

     
      <div className="footer-bottom">
        Copyright © Organick | Designed by VictorFlow Templates - Powered by Webflow
      </div>
    </footer>
  );
}

export default Footer;