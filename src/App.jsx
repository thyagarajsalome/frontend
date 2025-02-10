import React, { Suspense, lazy } from "react";
import Navbar from "./assets/components/Navbar/Navbar"; // Critical component loaded immediately

// Lazy load non-critical components
const Hero = lazy(() => import("./assets/components/Hero/Hero"));
const Skills = lazy(() => import("./assets/components/Skills/Skills"));
const Projects = lazy(() => import("./assets/components/Projects/Projects"));
const Experience = lazy(() =>
  import("./assets/components/Experience/Experience")
);
const Footer = lazy(() => import("./assets/components/Footer/Footer"));

const App = () => {
  return (
    <div>
      <Navbar />
      {/* Suspense will display fallback content while lazy components load */}
      <Suspense fallback={<div>Loading content...</div>}>
        <section id="home">
          <Hero />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
