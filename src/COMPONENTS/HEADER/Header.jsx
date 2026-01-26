import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { GoHeartFill } from "react-icons/go";
import { CgProfile } from "react-icons/cg";

import list from "../../SVG/list.svg";

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const closeDrawer = () => setIsDrawerOpen(false);
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  // Close drawer on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape" && isDrawerOpen) closeDrawer();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isDrawerOpen]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  // Close drawer when clicking a nav link
  const handleNavClick = () => {
    closeDrawer();
  };

  return (
    <header className="header">
      <div className="header-inner">

        <div className="logo">
          <img src={list} alt="logo" />
          <h2>Organick</h2>
        </div>

        
        <nav className="header-nav">
          <NavLink to="/home" onClick={handleNavClick}>Home</NavLink>
          <NavLink to="/category" onClick={handleNavClick}>Category</NavLink>
          <NavLink to="/shop" onClick={handleNavClick}>Shop</NavLink>
          <NavLink to="/services" onClick={handleNavClick}>Services</NavLink>
          <NavLink to="/team" onClick={handleNavClick}>Team</NavLink>
          <NavLink to="/contact" onClick={handleNavClick}>Contact</NavLink>
        </nav>

        {/* ИКОНКИ */}
        <div className="icons">
          <NavLink to="/like">
            <GoHeartFill className="icon" />
          </NavLink>

          <NavLink to="/cart">
            <PiShoppingCartSimpleFill className="icon" />
          </NavLink>

          <NavLink to="/res">
            <CgProfile className="icon" />
            <span>Registration</span>
          </NavLink>
        </div>

        {/* Burger Button - Mobile Only */}
        <button
          className="burger-btn"
          onClick={toggleDrawer}
          aria-expanded={isDrawerOpen}
          aria-controls="mobile-drawer"
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

      {/* Overlay */}
      {isDrawerOpen && (
        <div className="drawer-overlay" onClick={closeDrawer} aria-hidden="true"></div>
      )}

      {/* Mobile Drawer */}
      <nav
        id="mobile-drawer"
        className={`mobile-drawer ${isDrawerOpen ? "open" : ""}`}
        aria-label="Mobile navigation"
      >
        <button
          className="drawer-close"
          onClick={closeDrawer}
          aria-label="Close navigation menu"
        >
          ×
        </button>
        <div className="drawer-nav">
          <NavLink to="/home" onClick={handleNavClick}>Home</NavLink>
          <NavLink to="/category" onClick={handleNavClick}>Category</NavLink>
          <NavLink to="/shop" onClick={handleNavClick}>Shop</NavLink>
          <NavLink to="/services" onClick={handleNavClick}>Services</NavLink>
          <NavLink to="/team" onClick={handleNavClick}>Team</NavLink>
          <NavLink to="/contact" onClick={handleNavClick}>Contact</NavLink>
        </div>
      </nav>
    </header>
  );
}
