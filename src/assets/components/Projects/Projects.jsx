import React from "react";
import { ExternalLink } from "lucide-react";
import "./Projects.css";

const Projects = () => {
  const projects = {
    webDevelopment: [
      {
        title: "Tool Website",
        url: "https://toolwebsite.in/",
      },
      {
        title: "Vega Design",
        url: "https://vegadesign.netlify.app/",
      },
      {
        title: "Vega Translate",
        url: "https://vegatranslate.netlify.app/",
      },
      {
        title: "Email Subscription",
        url: "https://thyagarajsalome.github.io/emailSub/",
      },
      {
        title: "Notes App",
        url: "https://thyagarajsalome.github.io/Notes-app/",
      },
      {
        title: "Quiz App",
        url: "https://thyagarajsalome.github.io/quiz-app/",
      },
      {
        title: "Image Search",
        url: "https://thyagarajsalome.github.io/image-Search/",
      },
    ],
    interactive3D: [
      {
        title: "3D Teapot",
        url: "https://teapot-3d.vercel.app/",
      },
      {
        title: "3D Planet",
        url: "https://3dplanet.vercel.app/",
      },
      {
        title: "3D Projects",
        url: "https://3dartist-portfolio.netlify.app/#home",
      },
      {
        title: "Interactive 3D Shoe",
        url: "https://interactive-3dshoe.vercel.app/",
      },
      {
        title: "Paint Visualization",
        url: "https://toolwebsite.in/PaintVisualization.html",
      },
    ],
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          <div className="category-container">
            <h3 className="category-title">Web Development</h3>
            <div className="projects-container">
              {projects.webDevelopment.map((project, index) => (
                <a
                  key={index}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card"
                >
                  <span className="project-title">{project.title}</span>
                  <ExternalLink className="external-icon" size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="category-container">
            <h3 className="category-title">3D Interactive</h3>
            <div className="projects-container">
              {projects.interactive3D.map((project, index) => (
                <a
                  key={index}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card"
                >
                  <span className="project-title">{project.title}</span>
                  <ExternalLink className="external-icon" size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
