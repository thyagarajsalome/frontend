import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills">
      <div className="skills-grid">
        <div className="skill-category">
          <h3 className="category-title">Frontend Developer</h3>
          <ul>
            <li>HTML & CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>API</li>
            <li>Three.js</li>
            <li>Git</li>
            <li>GitHub</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3 className="category-title">3D Artist</h3>
          <ul>
            <li>3D Design and Visualization</li>
            <li>Architectrual & Interior Design and Drafting</li>
            <li>Product Visualization</li>
            <li>Lighting</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3 className="category-title">Other Skills</h3>
          <ul>
            <li>AutoCAD Drafting</li>
            <li>3D Modleing low-high poly</li>
            <li>3ds Max & Blender</li>
            <li>Vray Rendering</li>
            <li>Photoshop</li>
            <li>Filmora Video Editing</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
