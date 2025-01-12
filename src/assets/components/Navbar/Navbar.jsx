import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      return savedTheme
        ? savedTheme === "dark"
        : window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "skills", "projects", "experience", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const handleScrollToSection = (id) => {
    setMenuOpen(false);
    setActiveSection(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a onClick={() => handleScrollToSection("home")}>TM</a>
      </div>
      <div className="navbar-controls">
        <button
          onClick={toggleTheme}
          className="theme-toggle"
          aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
        <div
          className="menu-icon"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </div>
      </div>
      <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
        {navItems.map(({ id, label }) => (
          <li key={id}>
            <a
              onClick={() => handleScrollToSection(id)}
              className={activeSection === id ? "active" : ""}
              aria-current={activeSection === id ? "page" : undefined}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
