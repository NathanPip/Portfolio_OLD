import React, { useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import ProjectCard from "./ProjectCard";

function Projects({ projects }) {
  const [buttons] = useState(["Featured", "Client Work", "Cool Projects", "All"]);
  const [selectedButton, setSelectedButton] = useState(0);
  const [currentFilter, setCurrentFilter] = useState("Featured");

  const displayProjects = (filter) => {
    let displayed = [];
    projects.forEach((project) => {
      if (project.skills.includes(filter) || project.filter.includes(filter))
        displayed.push(project);
    });
    if (displayed.length === 0) displayed = projects;
    return displayed.map((proj) => (
      <ProjectCard key={proj.id} project={proj} />
    ));
  };

  const handleOnClick = (index, filter) => {
    setSelectedButton(index);
    setCurrentFilter(filter);
  };

  const displayButtons = () => {
    return buttons.map((button, index) => {
      return (
        <button
          className={
            index === selectedButton
              ? "filter-button active"
              : "filter-button"
          }
          key={index.toString()}
          onClick={() => handleOnClick(index, button)}
        >
          {button}
        </button>
      );
    })
  }

  return (
    <AnimationOnScroll
      className="projects"
      animateIn="fade-in"
      duration={0.5}
      offset={200}
      animateOnce={true}
    >
      <div id="projects" className="projects-header-container">
        <h2 className="projects-title">Projects</h2>
        {displayButtons()}
      </div>
      <div className="projects-container">{displayProjects(currentFilter)}</div>
      <AnimationOnScroll
        className={`projects-view-more-container ${
          currentFilter === "All" ? "hide" : null
        }`}
        animateIn="fade-in"
        duration={0.5}
        offset={200}
        animateOnce={true}
      >
        <button
          className={`projects-view-more-btn ${
            currentFilter === "All" ? "hide" : null
          }`}
          onClick={() => setCurrentFilter("All")}
        >
          View More<span>🡣</span>
        </button>
      </AnimationOnScroll>
    </AnimationOnScroll>
  );
}

export default Projects;
