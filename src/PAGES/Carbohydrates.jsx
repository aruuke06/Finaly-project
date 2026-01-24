
import React, { useState } from 'react';
import "../STYLES/card.css";
import { GoHeartFill } from "react-icons/go"; 
import { PiShoppingCartSimpleFill } from "react-icons/pi"; 

function Carbohydrates() {
  const [open, setOpen] = useState(false);

  return (
    <section className="protein-section">
      <div className="protein-info">
        <h2>Why Carbohydrates Are Essential</h2>

        <div className={open ? "text-box open" : "text-box"}>
          <p>Carbohydrates are the body's primary energy source, essential for maintaining vital functions.</p>

          <h3>1. Instant Energy Source</h3>
          <p>Carbs are broken down into glucose, which is the main fuel for your brain and physical activities.</p>

          <h3>2. Digestive Health</h3>
          <p>Complex carbohydrates are rich in fiber, which helps regulate digestion and prevents bloating.</p>

          <h3>3. Muscle Sparing</h3>
          <p>Eating enough carbs prevents the body from breaking down muscle tissue for energy.</p>

          <h3>4. Brain Function</h3>
          <p>Your nervous system relies on a steady supply of carbohydrates to maintain focus and mental clarity.</p>
        </div>

        <button className="read-btn" onClick={() => setOpen(!open)}>
          {open ? "Read Less ▲" : "Read More ▼"}
        </button>
      </div>

      <div className="protein-grid">
        <div className="protein-card">
          <h5>Honey <GoHeartFill className="heart-icon" /></h5>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS12_Ah5u-pZ_ItaoW26OnpB7Lz5lXQMjjamA&s" alt="Honey" />
          <h6>6 gram carbs</h6>
          <p className="price">$8.50</p>
          <button className="add-btn">Add to cart <PiShoppingCartSimpleFill /></button>
        </div>

        <div className="protein-card">
          <h5>White Bread <GoHeartFill className="heart-icon" /></h5>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu8oCue7ElFndd3ex4nHPwp8Agb0klaoUx2w&s" alt="White Bread" />
          <h6>7 gram carbs</h6>
          <p className="price">$2.10</p>
          <button className="add-btn">Add to cart <PiShoppingCartSimpleFill /></button>
        </div>
        
        <div className="protein-card">
          <h5>Sweet Potato <GoHeartFill className="heart-icon" /></h5>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Gmq9tkTTwvxK4FLxqoaxKV5hU681zNgnHQ&s" alt="Sweet Potato" />
          <h6>20 gram carbs</h6>
          <p className="price">$3.45</p>
          <button className="add-btn">Add to cart <PiShoppingCartSimpleFill /></button>
        </div>

        <div className="protein-card">
          <h5>Pumpkin <GoHeartFill className="heart-icon" /></h5>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9IcGFy4ylJgL_pDziRAS1-5iCP2VxkpQHYw&s" alt="Pumpkin" />
          <h6>15 gram carbs</h6>
          <p className="price">$4.90</p>
          <button className="add-btn">Add to cart <PiShoppingCartSimpleFill /></button>
        </div>

        <div className="protein-card">
          <h5>Hazelnut <GoHeartFill className="heart-icon" /></h5>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjS7ktO_d8IyjlB8Jir7GleM9hUZBOyU0zCA&s" alt="Hazelnut" />
          <h6>10 gram carbs</h6>
          <p className="price">$12.30</p>
          <button className="add-btn">Add to cart <PiShoppingCartSimpleFill /></button>
        </div>

        <div className="protein-card">
          <h5>Buckwheat <GoHeartFill className="heart-icon" /></h5>
          <img src="https://edaplus.info/food_pictures/buckwheat.jpg" alt="Buckwheat" />
          <h6>20 gram carbs</h6>
          <p className="price">$5.15</p>
          <button className="add-btn">Add to cart <PiShoppingCartSimpleFill /></button>
        </div>
      </div>
    </section>
  );
}

export default Carbohydrates;

