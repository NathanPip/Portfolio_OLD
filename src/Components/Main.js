import React from "react";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

function Main({ skills, projects }) {
  return (
    <div className="main">
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Contact />
    </div>
  );
}

export default Main;
