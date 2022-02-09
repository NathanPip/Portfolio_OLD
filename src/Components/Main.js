import React from "react";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

function Main({ skills, projects }) {
  return (
    <div className="main">
      <Skills skills={skills} />
      <Projects projects={projects} />
      <About />
      <Contact />
    </div>
  );
}

export default Main;
