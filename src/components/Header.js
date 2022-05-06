import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import CartIcon from "./CartIcon.js";

import hamburger from "../assets/hamburger.png";
import close from "../assets/close.png";

const Header = () => {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };
  return (
    <header className="header">
      <div className="logo-nav-wrapper">
        <a href="/" className="logo">
          Stix.
        </a>
        <nav className={nav ? "nav open" : "nav"}>
          <div className="nav-wrapper">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-links selected" : "nav-links"
              }
            >
              Home
            </NavLink>
            <a href="/" className="nav-links">
              About
            </a>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? "nav-links selected" : "nav-links"
              }
            >
              Products
            </NavLink>
            <a href="/" className="nav-links">
              <CartIcon />
            </a>
          </div>
        </nav>
        <button className="hamburger" onClick={openNav}>
          <img
            src={nav ? close : hamburger}
            alt="Menu"
            className="hamburger-img"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
