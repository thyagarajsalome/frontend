import React from "react";
import "./Skills.css";
import {
  Code,
  Database,
  Palette,
  Globe,
  Server,
  GitBranch,
  Github,
  Cpu,
  Layers,
  Settings,
  Search,
  Camera,
  Box,
  Wrench,
} from "lucide-react";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills-grid">
        <div className="skill-category">
          <h3 className="category-title">Frontend Developer</h3>
          <ul className="skills-list">
            <li className="skill-item">HTML & CSS</li>
            <li className="skill-item">JavaScript</li>
            <li className="skill-item">Node js basic</li>
            <li className="skill-item">React Basic</li>
            <li className="skill-item">API</li>
            <li className="skill-item">Three.js</li>
            <li className="skill-item">Git</li>
            <li className="skill-item">GitHub</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3 className="category-title">Backend Developer</h3>
          <ul className="skills-list">
            <li className="skill-item">Node, Express JS</li>
            <li className="skill-item">Building RESTful APIs</li>
            <li className="skill-item">CRUD Operation, Postman testing</li>
            <li className="skill-item">Fetching API, fetching from database</li>
            <li className="skill-item">HTTP Methods </li>
            <li className="skill-item">Middleware</li>
            <li className="skill-item">Basic Authentication</li>
            <li className="skill-item">Handling Routes</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3 className="category-title">Other Skills</h3>
          <ul className="skills-list">
            <li className="skill-item">AutoCAD Drafting</li>
            <li className="skill-item">3D Modeling low-high poly</li>
            <li className="skill-item">3ds Max & Blender</li>
            <li className="skill-item">Vray Rendering</li>
            <li className="skill-item">Photoshop</li>
            <li className="skill-item">Automation & Scripting</li>
            <li className="skill-item">Search engine optimization (SEO)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
