import React from "react";
import "./Hero.css";

const Hero = () => {
  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Welcome to My <span className="highlight">Portfolio</span>
        </h1>
        <p className="hero-subtitle">
          Hello! I’m Thyagaraj, a dedicated <span>Frontend Developer</span> and 3D Artist. I
          specialize in creating visually captivating and highly functional web
          applications, intuitive user experiences, and immersive 3D web
          environments. Blending creativity with technical proficiency, I bring
          innovative ideas to life in the digital realm.
        </p>
        <button
          onClick={() => handleScrollToSection("projects")}
          className="hero-button"
        >
          View My Work
        </button>
      </div>
    </section>
  );
};

export default Hero;
