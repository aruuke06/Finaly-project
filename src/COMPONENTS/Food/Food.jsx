import React from "react";
import "./food.css";
import { GrUserManager } from "react-icons/gr";
import { LuDot } from "react-icons/lu";
import food from "../../SVG/food.svg";

function Food() {
  return (
    <section className="food">
      {/* HERO */}
      <div className="food-hero">
        <img src={food} alt="" />

        <div className="food-overlay">
          <span className="food-meta">
            Posted On: January 6, 2022 <GrUserManager /> By Rachi Card
          </span>

          <h1>Research More Organic Food</h1>

          <p>
            Established fact that a reader will be distracted by the readable
            content of a page when looking a layout. The point of using Lorem
            Ipsum is that it has a more-or-less normal distribution of letters.
          </p>
        </div>
      </div>

     
      <div className="food-body">
        <p>
          Uniquely matrix economically sound value through cooperative technology.
          Competently parallel task fully researched data and enterprise process
          improvements.
        </p>

        <h2>Preferred Form of Vitamin D?</h2>

        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking a layout.
        </p>

        <div className="food-list">
          <p><LuDot /> Publishing packages and web page Lorem Ipsum</p>
          <p><LuDot /> Content here, content here, making it readable</p>
          <p><LuDot /> Packages and web page Lorem Ipsum</p>
        </div>

        <div className="food-quote">
          “The first rule of any organic used in a business is that nature applied
          to an efficient operation will magnify the efficiency.”
        </div>

        <h3>Make perfect organic product with us</h3>

        <div className="food-steps">
          <p>1. Publishing packages and web page Lorem Ipsum</p>
          <p>2. Content here, content here, making it readable</p>
          <p>3. Packages and web page Lorem Ipsum</p>
          <p>4. More-or-less normal distribution of letters</p>
        </div>
      </div>
    </section>
  );
}

export default Food;