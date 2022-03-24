import React, { useState } from "react";

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
          <a href="/" className="nav-links">
            Home
          </a>
          <a href="/" className="nav-links">
            Gallery
          </a>
          <a href="/" className="nav-links">
            Contact
          </a>
          <a href="/" className="nav-links">
            Order Now
          </a>
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
