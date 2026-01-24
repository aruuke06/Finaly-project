import React, { useState } from "react";
import "../STYLES/Squirrels.css"
import { GoHeartFill } from "react-icons/go";
import { PiShoppingCartSimpleFill } from "react-icons/pi";

export default function Squirrels() {
  const [open, setOpen] = useState(false);

  return (
    <section className="protein-section">

      <div className="protein-info">
        <h2>Why Protein Is Important</h2>

        <div className={open ? "text-box open" : "text-box"}>
          <p>Protein forms the structure of almost every part of your body – muscles, bones, skin, hair, nails, and blood.</p>

          <h3>1. Builds and repairs muscles</h3>
          <p>Protein rebuilds muscle fibers after workouts.</p>

          <h3>2. Supports immune system</h3>
          <p>Protein helps produce antibodies to fight infections.</p>

          <h3>3. Produces hormones and enzymes</h3>
          <p>Many important hormones and enzymes are made from proteins.</p>

          <h3>4. Healthy skin, hair, nails</h3>
          <p>Keratin and collagen depend on protein.</p>

          <h3>5. Keeps you full longer</h3>
          <p>Protein digests slowly and reduces cravings.</p>

          <h3>6. Helps with weight control</h3>
          <p>Protein boosts metabolism and burns calories.</p>

          <h3>7. Provides energy</h3>
          <p>If carbs are low, your body uses protein for energy.</p>
        </div>

        <button className="read-btn" onClick={() => setOpen(!open)}>
          {open ? "Read Less ▲" : "Read More ▼"}
        </button>
      </div>

      <div className="protein-grid">

        <div className="protein-card">
          <h5>Chickpeas <GoHeartFill className="heart-icon" /></h5>
          <img src="https://kidseatincolor.com/wp-content/uploads/2022/02/chickpeas-1024x705.jpeg" alt="" />
          <h6>7 g protein</h6>
          <p className="price">$3.50</p>
          <button className="add-btn">Add to cart <PiShoppingCartSimpleFill /></button>
        </div>

        <div className="protein-card">
          <h5>Oats <GoHeartFill className="heart-icon" /></h5>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMgH-LBUvBcs96msJXDXfIIpIj79OzL8MwyA&s" alt="" />
          <h6>11 g protein</h6>
          <p className="price">$2.99</p>
          <button className="add-btn">Add to cart <PiShoppingCartSimpleFill /></button>
        </div>

        <div className="protein-card">
          <h5>Rice <GoHeartFill className="heart-icon" /></h5>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8X5U10nC4t8ATbFSrvVMlV6oRoqLkDvBiHQ&s" alt="" />
          <h6>3 g protein</h6>
          <p className="price">$4.20</p>
          <button className="add-btn">Add to cart <PiShoppingCartSimpleFill /></button>
        </div>

        <div className="protein-card">
          <h5>Egg <GoHeartFill className="heart-icon" /></h5>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrYKwUrOKGO6PDyXfjVKTbGOLHmS86ubqOnA&s" alt="" />
          <h6>14 g protein</h6>
          <p className="price">$1.50</p>
          <button className="add-btn">Add to cart <PiShoppingCartSimpleFill /></button>
        </div>

        <div className="protein-card">
          <h5>Chicken Fillet <GoHeartFill className="heart-icon" /></h5>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoJxV_uVR69H4eK1XiGm3Vwngol1ENu2Cuuw&s" alt="" />
          <h6>25 g protein</h6>
          <p className="price">$12.00</p>
          <button className="add-btn">Add to cart <PiShoppingCartSimpleFill /></button>
        </div>

        <div className="protein-card">
          <h5>Beef <GoHeartFill className="heart-icon" /></h5>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5CiySL9EXQvXbpxGnMrM4fLMaoeSU7cEVmw&s" alt="" />
          <h6>19 g protein</h6>
          <p className="price">$15.50</p>
          <button className="add-btn">Add to cart <PiShoppingCartSimpleFill /></button>
        </div>

      </div>
    </section>
  );
}
