import React from "react";
import "./Skills.css";

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
            <li className="skill-item">React</li>
            <li className="skill-item">API</li>
            <li className="skill-item">Three.js</li>
            <li className="skill-item">Git</li>
            <li className="skill-item">GitHub</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3 className="category-title">3D Artist</h3>
          <ul className="skills-list">
            <li className="skill-item">3D Design and Visualization</li>
            <li className="skill-item">
              Architectrual & Interior Design and Drafting
            </li>
            <li className="skill-item">Product Visualization</li>
            <li className="skill-item">Lighting</li>
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
