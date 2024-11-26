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
          Welcome to <span className="highlight">My Portfolio</span>
        </h1>
        <p className="hero-subtitle">
          Hello! I'm Thyagaraj, a passionate Frontend Developer and 3D Artist. I
          specialize in crafting functional and visually engaging web
          applications, intuitive mobile apps, and immersive 3D web experiences.
          My work combines creativity with technical expertise to bring ideas to
          life in the digital space.
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
