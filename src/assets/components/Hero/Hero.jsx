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
        <p className="hero-subtitle">
          Hello! I'm Thyagaraj, a dedicated{" "}
          <span className="highlight-text">Frontend Developer</span> and{" "}
          <span className="highlight-text">3D Artist</span>. I specialize in
          creating visually captivating and highly functional web applications,
          intuitive user experiences, and immersive 3D web environments.
          Blending creativity with technical proficiency, I bring innovative
          ideas to life in the digital realm.
        </p>
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
