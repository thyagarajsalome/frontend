import React from "react";
import Navbar from "./assets/components/Navbar/Navbar";
import Hero from "./assets/components/Hero/Hero";
import Skills from "./assets/components/Skills/Skills";
import Projects from "./assets/components/Projects/Projects";
import Experience from "./assets/components/Experience/Experience";
import Footer from "./assets/components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <div id="home">
        <div>{/* <HeroSection /> */}</div>
        <Hero />
      </div>

      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <Footer />
    </div>
  );
};

export default App;
