import React, { useState, useEffect } from "react";
import "./Navbar.css";

import {
  FaShieldAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={scrolled ? "navbar active" : "navbar"}>
      <div className="logo">
        <FaShieldAlt className="logo-icon" />
        <span>PhishGuardAI</span>
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li><a href="#home">Home</a></li>
        <li><a href="#scanner">Scanner</a></li>
        <li><a href="#dashboard">Dashboard</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#about">About</a></li>
      </ul>

      <button className="scan-btn">
        Scan Nowza
      </button>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

    </nav>
  );
}

export default Navbar;