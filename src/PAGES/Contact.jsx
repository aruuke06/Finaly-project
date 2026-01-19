import React from "react";
import "../STYLES/contacts.css";

import { IoIosMail } from "react-icons/io";
import { MdAddCall } from "react-icons/md";
import { FaTelegram, FaInstagram, FaPinterest } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

import contact from "../SVG/contact.svg";
import contact1 from "../SVG/contact1.svg";
import contact2 from "../SVG/contact2.svg";

import { handleSubmit, sendEmail, callPhone } from "../REDUX/contactt";

function Contact() {
  return (
    <section className="contact">
    
      <div className="contact-header">
        <img src={contact} alt="contact" />
        <h1>Contact Us</h1>
      </div>

      <div className="contact-info">
        <img src={contact1} alt="info" />
        <div>
          <h2>We'd love to talk about how we can work together.</h2>
          <p>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley.
          </p>

          <button onClick={sendEmail}>
            <IoIosMail /> Message: zozobekovaaruuke58@gmail.com
          </button>

          <button onClick={callPhone}>
            <MdAddCall /> Contact Us <span>+996550219237</span>
          </button>

          <div className="socials">
            <FaTelegram />
            <FaWhatsapp />
            <FaInstagram />
            <FaPinterest />
          </div>
        </div>
      </div>

      <div className="contact-location">
        <img src={contact2} alt="location" />
        <div className="location-card">
          <p>Location</p>
          <h3>Our Farms</h3>
          <p>
            Established fact that a reader will be distracted by the readable
            content of a page when looking a layout. The point of using.
          </p>

          <h4>
            New York, USA
            <span>299 Park Avenue New York, New York 10171</span>
          </h4>

          <h4>
            London, UK
            <span>30 Stamford Street, London SE1 9LQ</span>
          </h4>
        </div>
      </div>

      <form id="contactForm" className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div>
            <label>Full Name*</label>
            <input id="fullName" name="fullName" type="text" placeholder="Your Full Name" />
          </div>

          <div>
            <label>Your Email*</label>
            <input id="email" name="email" type="email" placeholder="example@gmail.com" />
          </div>
        </div>

        <div className="form-row">
          <div>
            <label>Company*</label>
            <input id="company" name="company" type="text" placeholder="Your company name" />
          </div>

          <div>
            <label>Subject*</label>
            <input id="subject" name="subject" type="text" placeholder="How can we help?" />
          </div>
        </div>

        <div>
          <label>Message*</label>
          <textarea id="message" name="message" placeholder="Hello, I would like to talk about..."></textarea>
        </div>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;

