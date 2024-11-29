import React from "react";
import "./Experience.css";

const Experience = () => {
  const experiences = [
    {
      role: "3D Artist/Frontend Developer",
      organization: "Projects",
      period: "Jan 2023 - Present",
      tasks: [
        "Freelance, project-based work focused on building complete frontend web applications.",
        "3D web applications and dynamic user interfaces. Designed and prototyped web UI/UX, conducted thorough testing, deployed applications, and provided clients with live demo links for proposals.",
      ],
    },
    {
      role: "3D Artist",
      organization: "Lowe's",
      period: "Sep 2021 - Nov 2022",
      tasks: [
        "Created product base images for interior design",
        "Specialized in rendering & Photoshop automation",
      ],
    },
    {
      role: "3D Designer",
      organization: "Dubai Expo 2020",
      period: "Aug 2021 - Nov 2022",
      tasks: [
        "Contributed to concept design and development, 3D modeling of pavilions, and CAD drafting.",
        "Designed thematic and lighting elements, and created graphical images and signage",
      ],
    },
    {
      role: "AutoCAD. Computer-Aided Design, Draughtsman",
      organization: "IMG Worlds of Adventure Dubai",
      period: "Nov 2013 - Jun 2017",
      tasks: [
        "Designed and produced working drawings for various projects, including 3D models of pavilions and 2D CAD drawings.",
        "Developed thematic and lighting elements, as well as graphical images",
      ],
    },
    {
      role: "Lighting Designer",
      organization: "LET Lighting Design Dubai",
      period: "Jun 2012 - Nov 2013",
      tasks: [
        "Developed lighting working drawings, concept designs, and presentations.",
        "Designed lighting applications for architectural, interior, and other projects.",
        "Performed 3D modeling and rendering to bring concepts to life.",
      ],
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <h3 className="role">{exp.role}</h3>
              <p className="details">
                {exp.organization} | {exp.period}
              </p>
              <ul className="tasks">
                {exp.tasks.map((task, idx) => (
                  <li key={idx}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
