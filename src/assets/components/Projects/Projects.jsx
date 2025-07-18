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
        title: "wallpaint",
        url: "https://wallpaint.in/",
      },

      {
        title: "Image Search",
        url: "https://thyagarajsalome.github.io/image-Search/",
      },
      {
        title: "Pixel Toolbox",
        url: "https://pixel-toolbox.vercel.app/",
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
        title: "Interactive 3D Shoe",
        url: "https://interactive-3dshoe.vercel.app/",
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
