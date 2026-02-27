import React from "react";
import "./Skills.css";
import {
  Code,
  Server,
  Wrench,
  Github,
  Layout,
  Cpu,
  Database,
  Smartphone,
  Search,
} from "lucide-react";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">Technical Expertise</h2>
        <div className="skills-grid">
          {/* Frontend Category */}
          <div className="skill-category">
            <h3 className="category-title">
              <Code className="category-icon" size={24} /> Frontend Development
            </h3>
            <ul className="skills-list">
              <li className="skill-item">React & React Three Fiber</li>
              <li className="skill-item">JavaScript (ES6+)</li>
              <li className="skill-item">Three.js & WebGL</li>
              <li className="skill-item">HTML5 & CSS3 (Flex/Grid)</li>
              <li className="skill-item">Responsive UI/UX Design</li>
              <li className="skill-item">
                <Github size={14} style={{ marginRight: "8px" }} />
                Git & GitHub
              </li>
            </ul>
          </div>

          {/* Backend & Mobile Category */}
          <div className="skill-category">
            <h3 className="category-title">
              <Server className="category-icon" size={24} /> Backend & Mobile
            </h3>
            <ul className="skills-list">
              <li className="skill-item">Node.js & Express</li>
              <li className="skill-item">
                <Smartphone size={14} style={{ marginRight: "8px" }} />
                Mobile App Deployment (TWA)
              </li>
              <li className="skill-item">
                <Database size={14} style={{ marginRight: "8px" }} />
                RESTful API Development
              </li>
              <li className="skill-item">CRUD Operations & Middleware</li>
              <li className="skill-item">
                <Cpu size={14} style={{ marginRight: "8px" }} />
                AI-Driven Web Solutions
              </li>
              <li className="skill-item">Postman API Testing</li>
            </ul>
          </div>

          {/* Technical & Creative Category */}
          <div className="skill-category">
            <h3 className="category-title">
              <Wrench className="category-icon" size={24} /> Technical &
              Creative
            </h3>
            <ul className="skills-list">
              <li className="skill-item">3D Modeling (Blender/3ds Max)</li>
              <li className="skill-item">AutoCAD Drafting (2D/3D)</li>
              <li className="skill-item">Vray Rendering & Texturing</li>
              <li className="skill-item">Photoshop Automation</li>
              <li className="skill-item">
                <Search size={14} style={{ marginRight: "8px" }} />
                SEO Strategy & Optimization
              </li>
              <li className="skill-item">Automation & Scripting</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Skills);
