// Projects.jsx
import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="project-card">
        <h3>Web Development</h3>
        <a
          href="https://toolwebsite.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary"
        >
          <i className="fas fa-external-link-alt"></i> Tool Website
        </a>
        <a
          href="https://vegadesign.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary"
        >
          <i className="fas fa-external-link-alt"></i> Vega Design
        </a>
        <a
          href="https://vegatranslate.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary"
        >
          <i className="fas fa-external-link-alt"></i> Vega Translate
        </a>
      </div>
      <div className="project-card">
        <h3>3D Inter-active</h3>
        <a
          href="https://teapot-3d.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary"
        >
          <i className="fas fa-external-link-alt"></i>3D Teapot
        </a>
        <a
          href="https://3dplanet.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary"
        >
          <i className="fas fa-external-link-alt"></i> 3D Planet
        </a>
        <a
          href="https://3dartist-portfolio.netlify.app/#home"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary"
        >
          <i className="fas fa-external-link-alt"></i> 3D Projects
        </a>
      </div>
    </div>
  );
};

export default Projects;
