import React from "react";
import { ExternalLink, Globe, Smartphone, Box, Layout } from "lucide-react";
import "./Projects.css";

const Projects = () => {
  const projects = {
    webDevelopment: [
      {
        title: "AI Home Decorator",
        description:
          "AI-powered platform for interior design and home visualization.",
        url: "https://aihomedecorator.com/",
        tags: ["React", "Generative AI", "Node.js", "UI/UX"],
      },
      {
        title: "Home Design English",
        description:
          "An educational platform providing home design inspiration and resources.",
        url: "https://homedesignenglish.com/",
        tags: ["React", "SEO Optimization", "Responsive Design"],
      },
      {
        title: "Wallpaint",
        description:
          "Interactive web tool to visualize wall colors in real-time.",
        url: "https://wallpaint.in/",
        tags: ["JavaScript", "Frontend Development", "Design Prototyping"],
      },
      {
        title: "Tool Website",
        description:
          "A comprehensive suite of online utility tools for developers.",
        url: "https://toolwebsite.in/",
        tags: ["React", "RESTful APIs", "Web Utilities"],
      },
    ],
    landingPages: [
      {
        title: "AI Home Decorator Landing",
        description:
          "A conversion-focused landing page for the AI Home Decorator platform featuring modern UI and clear call-to-actions.",
        url: "https://ai-homedecorator-landing-01.vercel.app/",
        tags: ["React", "Marketing UI", "Conversion Optimization"],
      },
      {
        title: "Wallpaint Landing",
        description:
          "Lead-generation landing page for the Wallpaint tool, designed for high performance and user engagement.",
        url: "https://ai-wallpaint-ld.vercel.app/",
        tags: ["UI/UX Design", "Lead Generation", "Landing Page"],
      },
      {
        title: "DHC Landing Page",
        description:
          "Sleek and modern branding and landing page development for the DHC platform.",
        url: "https://landing-page-dhc.vercel.app/",
        tags: ["Web Development", "Vercel", "Brand Identity"],
      },
    ],
    interactive3D: [
      {
        title: "Interactive 3D Shoe",
        description:
          "High-fidelity 3D shoe customizer using Three.js and React Fiber.",
        url: "https://interactive-3dshoe.vercel.app/",
        tags: ["React Three Fiber", "Three.js", "3D Configurator"],
      },
      {
        title: "3D Planet",
        description:
          "An immersive exploration of a procedural 3D planet environment.",
        url: "https://3dplanet.vercel.app/",
        tags: ["WebGL", "Three.js", "Shader Programming"],
      },
      {
        title: "3D Teapot",
        description:
          "Classic geometry rendering demo showcasing materials and lighting.",
        url: "https://teapot-3d.vercel.app/",
        tags: ["Three.js", "3D Modeling", "Texture Mapping"],
      },
    ],
    mobileApps: [
      {
        title: "AI Home Decorator App",
        description:
          "Official Android application for AI-driven home decoration.",
        url: "https://play.google.com/store/apps/details?id=com.aihomedecorator.twa",
        tags: ["Android TWA", "Google Play Store", "Mobile UX"],
      },
      {
        title: "Tool Website App",
        description:
          "Mobile application version of Tool Website for on-the-go utility access.",
        url: "https://play.google.com/store/apps/details?id=in.toolwebsite.twa",
        tags: ["Android TWA", "Web-to-Mobile", "App Deployment"],
      },
    ],
  };

  const renderProjectCard = (project, index) => (
    <div key={index} className="project-card">
      <div className="project-info">
        <h4 className="project-name">{project.title}</h4>
        <p className="project-desc">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag, i) => (
            <span key={i} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="project-link-btn"
        aria-label={`Visit ${project.title}`}
      >
        <ExternalLink size={20} />
      </a>
    </div>
  );

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <div className="category-group">
          <h3 className="category-header">
            <Globe size={20} /> Web & AI Development
          </h3>
          <div className="projects-grid">
            {projects.webDevelopment.map((p, i) => renderProjectCard(p, i))}
          </div>
        </div>

        <div className="category-group">
          <h3 className="category-header">
            <Layout size={20} /> Landing Page Development
          </h3>
          <div className="projects-grid">
            {projects.landingPages.map((p, i) => renderProjectCard(p, i))}
          </div>
        </div>

        <div className="category-group">
          <h3 className="category-header">
            <Box size={20} /> Interactive 3D
          </h3>
          <div className="projects-grid">
            {projects.interactive3D.map((p, i) => renderProjectCard(p, i))}
          </div>
        </div>

        <div className="category-group">
          <h3 className="category-header">
            <Smartphone size={20} /> Mobile Applications
          </h3>
          <div className="projects-grid">
            {projects.mobileApps.map((p, i) => renderProjectCard(p, i))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
