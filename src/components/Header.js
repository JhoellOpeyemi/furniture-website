import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

import CartIcon from "./CartIcon.js";

import hamburger from "../assets/hamburger.png";
import close from "../assets/close.png";

const Header = () => {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <header className="header">
      <div className="logo-nav-wrapper">
        <Link to="/" className="logo">
          Stix.
        </Link>
        <nav className={nav ? "nav open" : "nav"}>
          <div className="nav-wrapper">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-links selected" : "nav-links"
              }
              onClick={closeNav}
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
              onClick={closeNav}
            >
              Products
            </NavLink>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive
                  ? "nav-links cart-icon selected"
                  : "nav-links cart-icon"
              }
            >
              <CartIcon />
            </NavLink>
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
