import React, { useState } from "react";
import "../STYLES/services.css";
import { Link } from "react-router-dom";

import ser1 from "../SVG/ser1.svg";
import ser2 from "../SVG/ser2.svg";
import ser3 from "../SVG/ser3.svg";
import ser4 from "../SVG/ser4.svg";
import ser5 from "../SVG/ser5.svg";
import ser6 from "../SVG/ser6.svg";
import ser7 from "../SVG/ser7.svg";
import ser8 from "../SVG/ser8.svg";

function Services() {
  const [play, setPlay] = useState(false);

  return (
    <section className="services">

      <div className="services-header">
        <img src={ser1} alt="" />
        <h1>Services</h1>
      </div>

      <div className="services-title">
        <h4>What we Grow</h4>
        <h2>Better Agriculture for <br /> Better Future</h2>
      </div>

      <div className="services-grid">

        <div className="left-column">
          <div className="service-card">
            <img src={ser3} alt="" />
            <h5>Dairy Products</h5>
            <p>Sed ut perspiciatis unde omnis iste natus.</p>
          </div>

          <div className="service-card">
            <img src={ser4} alt="" />
            <h5>Store Services</h5>
            <p>Sed ut perspiciatis unde omnis iste natus.</p>
          </div>

          <div className="service-card">
            <img src={ser5} alt="" />
            <h5>Delivery Services</h5>
            <p>Sed ut perspiciatis unde omnis iste natus.</p>
          </div>
        </div>

        <div className="services-banner">
          <img src={ser2} alt="banner" />
        </div>

        <div className="right-column">
          <Link to="/ouylity" className="service-card">
            <img src={ser6} alt="" />
            <h5>Agricultural Services</h5>
            <p>Sed ut perspiciatis unde omnis iste natus.</p>
          </Link>

          <div className="service-card">
            <Link to="/raspberry" className="service-card">  <img src={ser7} alt="" />
            <h5>Organic Products</h5>
            <p>Sed ut perspiciatis unde omnis iste natus.</p>
            </Link>
          
          </div>

          <div className="service-card">
            <img src={ser8} alt="" />
            <h5>Fresh Vegetables</h5>
            <p>Sed ut perspiciatis unde omnis iste natus.</p>
          </div>
        </div>

      </div>

      <div className="services-video">
        {!play && (
          <div className="video-overlay" onClick={() => setPlay(true)}>
            <h5>Organic Only</h5>
            <h3>Everyday Fresh & Clean</h3>
            <p>Simply dummy text of the printing industry.</p>
            <button className="play-btn">▶</button>
          </div>
        )}

        {play && (
          <iframe
            src="https://www.youtube.com/embed/FAi4YafedtU?autoplay=1"
            title="video"
            allow="autoplay"
            allowFullScreen
          />
        )}
      </div>

    </section>
  );
}

export default Services;
