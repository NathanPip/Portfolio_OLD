import React from 'react';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

function Main({skills}) {
    return (
        <div className="main">
            <Skills skills={skills}/>
            <Projects />
            <About />
            <Contact />
        </div>
    );
}

export default Main;