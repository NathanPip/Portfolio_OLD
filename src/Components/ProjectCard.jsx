import React from "react";

function ProjectCard({project}) {
  return (
    <div className="project-card">
        <h3 className="project-title">{project.title}</h3>
      <div className="project-head">
        <img className="project-image" alt={project.title + 'image'} src={process.env.PUBLIC_URL + project.thumbnail} />
        <ul className="project-skills">
          {project.skills.map(skill => <li key={skill} className="project-skills-item">{skill}</li>)}
        </ul>
      </div>
      <div className="project-body">
        <p className="project-desc">
          {project.desc}
        </p>
        <div className="project-buttons">
          <a href={project.live}><button className="live-demo" >Live Demo</button></a>
          <a href={project.github}><button className="github" >Github</button></a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
