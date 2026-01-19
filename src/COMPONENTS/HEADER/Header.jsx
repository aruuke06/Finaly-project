import { NavLink } from "react-router-dom";
import "./header.css";

import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { GoHeartFill } from "react-icons/go";
import { CgProfile } from "react-icons/cg";

import list from "../../SVG/list.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">

        <div className="logo">
          <img src={list} alt="logo" />
          <h2>Organick</h2>
        </div>

        
        <nav className="nav">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/category">Category</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/team">Team</NavLink>
          <NavLink to="/contact">Contact</NavLink>
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

      </div>
    </header>
  );
}
