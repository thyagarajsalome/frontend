// Navbar.jsx
import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#home">TM</a>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? (
          <span className="close-icon">&#10005;</span> // Close Icon (X)
        ) : (
          <span className="hamburger-icon">&#9776;</span> // Hamburger Icon (≡)
        )}
      </div>
      <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <li>
          <a href="#home" onClick={toggleMenu}>
            Home
          </a>
        </li>
        <li>
          <a href="#skills" onClick={toggleMenu}>
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" onClick={toggleMenu}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" onClick={toggleMenu}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
