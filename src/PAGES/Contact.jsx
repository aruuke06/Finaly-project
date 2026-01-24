import React, { useState } from "react";
import "../STYLES/contacts.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("✅ Message sent successfully! We will contact you soon.");

    setFormData({
      name: "",
      company: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-card">

        <div className="contact-left">
          <h2>Get in Touch</h2>
          <p className="contact-desc">
            Feel free to reach out to us anytime. We are happy to assist you.
          </p>

          <div className="info-box">
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <p>Turusbekova 109/1</p>
              <p>Bishkek, Kyrgyzstan</p>
            </div>
          </div>

ъ          <div className="info-box">
            <FaEnvelope className="info-icon" />
            <div>
              <h4>Email Us</h4>
              <a
                href="mailto:zozobekovaaruuke58@gmail.com"
                className="contact-link"
              >
                zozobekovaaruuke58@gmail.com
              </a>
            </div>
          </div>

          <div className="info-box">
            <FaPhoneAlt className="info-icon" />
            <div>
              <h4>Call / WhatsApp</h4>
              <a
                href="https://wa.me/996550219237"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                +996 550 219 237
              </a>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <h2>Send Us a Message</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="subject-input"
              value={formData.subject}
              onChange={handleChange}
            />

            <textarea
              className="message-box"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button className="send-btn" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>

      <div className="map-section">
        <iframe
          title="map"
          src="https://www.google.com/maps?q=Turusbekova+109%2F1+Bishkek+Kyrgyzstan&output=embed"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
