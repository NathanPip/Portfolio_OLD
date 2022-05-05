import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

function ProjectCard({ project }) {
  return (
    <AnimationOnScroll
      animateIn="fade-in"
      duration={1}
      offset={200}
      className="project-card"
      animateOnce={true}
    >
      <h3 className="project-title">{project.title}</h3>
      <div className="project-head">
        <a href={project.live} target="_blank" rel="noreferrer">
          <img
            className="project-image"
            alt={project.title + "image"}
            src={project.thumbnail}
          />
        </a>
        <ul className="project-skills">
          {project.skills.map((skill) => (
            <li key={skill} className="project-skills-item">
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <div className="project-body">
        {project.alert ? (
          <p className="project-alert">{project.alert}</p>
        ) : null}
        {project.demo ? (
          <p className="project-alert">{project.demo}</p>
        ) : null}
        <p className="project-desc">{project.desc}</p>
        <div className="project-buttons">
          <a href={project.live} target="_blank" rel="noreferrer">
            <button className="live-demo">Live Demo</button>
          </a>
          <a href={project.github} target="_blank" rel="noreferrer">
            <button className="github">Github</button>
          </a>
        </div>
      </div>
    </AnimationOnScroll>
  );
}

export default ProjectCard;
