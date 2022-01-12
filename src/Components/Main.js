import React from 'react';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

function Main({skills}) {
    return (
        <div className="main">
            <About />
            <Skills skills={skills}/>
            <h2 className="projects-title">Projects</h2>
            <Projects />
            <Contact />
        </div>
    );
}

export default Main;