import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScrollToSection = (id) => {
    setMenuOpen(false); // Close the menu (for mobile view)
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a onClick={() => handleScrollToSection("home")}>TM</a>
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
          <a onClick={() => handleScrollToSection("home")}>Home</a>
        </li>
        <li>
          <a onClick={() => handleScrollToSection("skills")}>Skills</a>
        </li>
        <li>
          <a onClick={() => handleScrollToSection("projects")}>Projects</a>
        </li>
        <li>
          <a onClick={() => handleScrollToSection("experience")}>Experience</a>
        </li>
        <li>
          <a onClick={() => handleScrollToSection("contact")}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
