

import React, { useState } from 'react';
import "../STYLES/card.css";
import { GoHeartFill } from "react-icons/go";
import { PiShoppingCartSimpleFill } from "react-icons/pi";

function Fats() {
  const [open, setOpen] = useState(false);

  return (
    <section className="protein-section">
      <div className="protein-info">
        <h2>The Importance of Healthy Fats</h2>

        <div className={open ? "text-box open" : "text-box"}>
          <p>Fats are a vital macronutrient that serves as a concentrated energy source and supports overall health.</p>

          <h3>1. Nutrient Absorption</h3>
          <p>Fats are essential for absorbing fat-soluble vitamins like A, D, E, and K, which are crucial for immunity and bone health.</p>

          <h3>2. Brain & Nerve Function</h3>
          <p>Your brain is about 60% fat. Healthy fats like Omega-3s are critical for cognitive function and protecting nerve fibers.</p>

          <h3>3. Hormone Production</h3>
          <p>Fats act as structural components for hormones that regulate metabolism, mood, and reproductive health.</p>

          <h3>4. Cell Structure & Protection</h3>
          <p>Every cell membrane in your body is made of lipids (fats). They also provide a protective cushion for your vital organs.</p>
        </div>

        <button className="read-btn" onClick={() => setOpen(!open)}>
          {open ? "Read Less ▲" : "Read More ▼"}
        </button>
      </div>

      <div className="protein-grid">
        <div className="protein-card">
          <h5>Avocado <GoHeartFill className="heart-icon" /></h5>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR13plLQRGAlqDAEHb8VCx6jsXuVIpfa01Obg&s" alt="Avocado" />
          <h6>15 g fats</h6>
          <p className="price">$2.50</p>
          <button className="add-btn">Add to cart <PiShoppingCartSimpleFill /></button>
        </div>

        <div className="protein-card">
          <h5>Walnuts <GoHeartFill className="heart-icon" /></h5>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRhnAkZfhDC9c_et_PqUZwj88k3hYtQM8BvA&s" alt="Walnuts" />
          <h6>65 g fats</h6>
          <p className="price">$14.20</p>
          <button className="add-btn">Add to cart <PiShoppingCartSimpleFill /></button>
        </div>
        
        <div className="protein-card">
          <h5>Salmon <GoHeartFill className="heart-icon" /></h5>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJxseVKy0_oTI4xMPLd7SH8cvg485CSBVRVQ&s" alt="Salmon" />
          <h6>13 g fats</h6>
          <p className="price">$18.00</p>
          <button className="add-btn">Add to cart <PiShoppingCartSimpleFill /></button>
        </div>

        <div className="protein-card">
          <h5>Olive Oil <GoHeartFill className="heart-icon" /></h5>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFm7IZS-X8EPf4qeKe37nXcRogCIGYTYHoiA&s" alt="Olive Oil" />
          <h6>100 g fats</h6>
          <p className="price">$11.50</p>
          <button className="add-btn">Add to cart <PiShoppingCartSimpleFill /></button>
        </div>

        <div className="protein-card">
          <h5>Dark Chocolate <GoHeartFill className="heart-icon" /></h5>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuQkM_ugsKpx1DEVfVG2F1ZMOGhQb29fhuiA&s" alt="Dark Chocolate" />
          <h6>31 g fats</h6>
          <p className="price">$5.75</p>
          <button className="add-btn">Add to cart <PiShoppingCartSimpleFill /></button>
        </div>

        <div className="protein-card">
          <h5>Almonds <GoHeartFill className="heart-icon" /></h5>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9ZfsRhkg2QXG5sQkSZ5Z2Pr16sEs15rCq9Q&s" alt="Almonds" />
          <h6>49 g fats</h6>
          <p className="price">$9.30</p>
          <button className="add-btn">Add to cart <PiShoppingCartSimpleFill /></button>
        </div>
      </div>
    </section>
  );
}

export default Fats;

