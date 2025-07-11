import React, { useCallback } from "react";
import "./Hero.css";

const Hero = () => {
  // Memoize the scroll handler to avoid recreating it on every render
  const handleScrollToSection = useCallback((id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Welcome to My <span className="highlight">Portfolio</span>
        </h1>
        <div>
          <p className="hero-subtitle">
            Hello! I'm Thyagaraj, a{" "}
            <span className="highlight-text">Frontend Developer</span>. I build
            beautiful, easy-to-use websites and web apps that work smoothly and
            look great.
          </p>
        </div>

        <button
          onClick={() => handleScrollToSection("projects")}
          className="hero-button"
          aria-label="View My Work"
        >
          View My Work
        </button>
      </div>
    </section>
  );
};

export default React.memo(Hero);
