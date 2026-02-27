import React from "react";
import { ExternalLink, Globe, Smartphone, Box, Layout, BookOpen, Search } from "lucide-react";
import { projectsData } from "../../../data/projectsData";
import { useProjectFilter } from "../../../hooks/useProjectFilter";
import "./Projects.css";

const Projects = () => {
  // Design Pattern: Custom Hook for state and business logic separation
  const { searchQuery, setSearchQuery, filteredData } = useProjectFilter(projectsData);

  const renderProjectCard = (project, index) => (
    <div key={index} className="project-card">
      <div className="project-info">
        <h4 className="project-name">{project.title}</h4>
        <p className="project-desc">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag, i) => (
            <span key={i} className="tag">{tag}</span>
          ))}
        </div>
      </div>
      <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link-btn" aria-label={`Visit ${project.title}`}>
        <ExternalLink size={20} />
      </a>
    </div>
  );

  const categoryConfig = {
    webDevelopment: { title: "Web & AI Development", icon: <Globe size={20} /> },
    studyHub: { title: "Work & Study Hub", icon: <BookOpen size={20} /> },
    landingPages: { title: "Landing Page Development", icon: <Layout size={20} /> },
    interactive3D: { title: "Interactive 3D", icon: <Box size={20} /> },
    mobileApps: { title: "Mobile Applications", icon: <Smartphone size={20} /> },
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Featured Projects & Studies</h2>

        {/* DSA Implementation: Real-time search/filter UI */}
        <div className="search-container" style={{ marginBottom: '3rem', position: 'relative', maxWidth: '500px', margin: '0 auto 3rem auto' }}>
          <div style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }}>
            <Search size={20} />
          </div>
          <input 
            type="text" 
            placeholder="Search by tech stack, title, or keyword..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ width: '100%', padding: '12px 12px 12px 45px', borderRadius: '8px', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)', fontSize: '1rem' }}
          />
        </div>

        {Object.keys(filteredData).length === 0 ? (
          <div style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
            <h3>No projects found matching your search.</h3>
          </div>
        ) : (
          Object.entries(filteredData).map(([categoryKey, projects]) => (
            <div key={categoryKey} className="category-group">
              <h3 className="category-header">
                {categoryConfig[categoryKey]?.icon} {categoryConfig[categoryKey]?.title}
              </h3>
              <div className="projects-grid">
                {projects.map((p, i) => renderProjectCard(p, i))}
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Projects;