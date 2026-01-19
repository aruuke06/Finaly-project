import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import "../STYLES/about.css";

import about from "../SVG/about.svg"


export default function Category() {
  return (<div>
    <section className="about-hero">
      <img src={about} alt="" className="hero-bg" />
      <h1 className="hero-title">Category</h1>
    </section>

    <div className="shop-categories">
      <NavLink
        to="/category/squirrels"
        className={({ isActive }) => isActive ? "cat-btn active" : "cat-btn"}
      >
        squirrels
      </NavLink>

      <NavLink
        to="/category/carbohydrates"
        className={({ isActive }) => isActive ? "cat-btn active" : "cat-btn"}
      >
        carbohydrates
      </NavLink>

      <NavLink
        to="/category/fats"
        className={({ isActive }) => isActive ? "cat-btn active" : "cat-btn"}
      >
        fats
      </NavLink>
    </div>
    <div className="shop-content">
      <Outlet />
    </div>

  </div>
  )
}
