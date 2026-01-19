import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../STYLES/shop.css";
import shop from "../SVG/shop.svg"
export default function Shop() {
  return (
    <main className="shop-page">

      <section className="shop-hero">
  <img src={shop} alt="shop" className="shop-hero-img" />
  <h1 className="shop-title">Shop</h1>
</section>


      <div className="shop-text">
        <h2>Healthy Recipes</h2>
        <p>Healthy, simple, and delicious dishes that help you reach your goals.</p>
      </div>

      <div className="shop-categories">
        <NavLink
          to="/shop/breakfast"
          className={({ isActive }) => isActive ? "cat-btn active" : "cat-btn"}
        >
          Breakfast
        </NavLink>

        <NavLink
          to="/shop/dinner"
          className={({ isActive }) => isActive ? "cat-btn active" : "cat-btn"}
        >
          Dinner
        </NavLink>

        <NavLink
          to="/shop/fruits"
          className={({ isActive }) => isActive ? "cat-btn active" : "cat-btn"}
        >
          Fruits
        </NavLink>

        <NavLink
          to="/shop/snacks"
          className={({ isActive }) => isActive ? "cat-btn active" : "cat-btn"}
        >
          Snacks
        </NavLink>
      </div>

      <div className="shop-content">
        <Outlet />
      </div>
    </main>
  );
}
