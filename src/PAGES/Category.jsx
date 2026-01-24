import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../STYLES/about.css";      
import about from "../SVG/about.svg"; 

export default function Category() {
  return (
    <div className="category-page">

      <section className="about-hero">
        <img src={about} alt="hero" className="hero-bg" />
        <h1 className="hero-title">Category</h1>
      </section>



      <div className="category-main-wrapper">
        <div className="three-box-wrapper">

          <NavLink to="/category/squirrels" className="three-box">
            <img
              className="three-img"
              src="https://i.pinimg.com/1200x/1f/ea/93/1fea93cbf0dc19a45a9cc2d41ab38e18.jpg"
              alt=""
            />
            <div className="three-text">Squirrels</div>
          </NavLink>

          <NavLink to="/category/carbohydrates" className="three-box">
            <img
              className="three-img"
              src="https://i.pinimg.com/1200x/2a/35/8c/2a358caef0ea983dccf23cf1fc4cdde5.jpg"
              alt=""
            />
            <div className="three-text">Carbohydrates</div>
          </NavLink>

          <NavLink to="/category/fats" className="three-box">
            <img
              className="three-img"
              src="https://i.pinimg.com/736x/12/5b/0e/125b0ec8ae6ca4c950f099ca1ac0149e.jpg"
              alt=""
            />
            <div className="three-text">Fats</div>
          </NavLink>

        </div>
      </div>

      <div className="shop-content">
        <Outlet />
      </div>
    </div>
  );
}
