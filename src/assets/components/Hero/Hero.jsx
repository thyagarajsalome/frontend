import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Welcome to <span className="highlight">My Portfolio</span>
        </h1>
        <p className="hero-subtitle">
          I am a Frontend Developer and 3D Artist. As a developer, I specialize
          in creating functional web applications, apps, and interactive 3D web
          experiences.
        </p>
        <a href="#projects" className="hero-button">
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;