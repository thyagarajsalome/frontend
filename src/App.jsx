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
      <div>
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Footer />
      </div>
    </div>
  );
};

export default App;
