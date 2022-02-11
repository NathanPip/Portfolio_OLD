import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

function Projects({ projects }) {
  const [buttons] = useState(["Featured", "All"]);
  const [selectedButton, setSelectedButton] = useState(0);
  const [currentFilter, setCurrentFilter] = useState("Featured");

  const displayProjects = filter => {
    let displayed = [];
    projects.forEach(project => {
      if (project.skills.includes(filter) || project.filter.includes(filter))
        displayed.push(project);
    });
    if (displayed.length === 0) displayed = projects;
    return displayed.map(proj => <ProjectCard key={proj.id} project={proj} />);
  };

  const handleOnClick = (index, filter) => {
    setSelectedButton(index);
    setCurrentFilter(filter);
  };

  return (
    <div id="projects">
      <div className="projects-header-container">
        <h2 className="projects-title">Projects</h2>
        {buttons.map((button, index) => {
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
        })}
      </div>
      {displayProjects(currentFilter)}
    </div>
  );
}

export default Projects;