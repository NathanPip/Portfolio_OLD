import React from 'react';
import ProjectCard from './ProjectCard';

function Projects () {

    return (
        <div className="projects">
            <button className="direction-btn" id="back">B</button>
            <ProjectCard />
            <button className="direction-btn" id="forward">F</button>
        </div>
    );
}

export default Projects;