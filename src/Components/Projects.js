import React from "react";
import ProjectCard from "./ProjectCard";

function Projects({projects}) {

  const displayProjects = (filter) => {
    let displayed = [];
    projects.forEach((project) => {
      if(project.skills.includes(filter) || project.filter.includes(filter))
        displayed.push(project);
    })
    if(displayed.length === 0)
      displayed = projects;
    return displayed.map(proj => <ProjectCard key={proj.id} project={proj} />)
  }

  return (
    <div id="projects">
      <h2 className="projects-title">Projects</h2>
      {displayProjects()}
    </div>
  );
}

export default Projects;
