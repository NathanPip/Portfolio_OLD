import React, {} from 'react'

function Nav() {

    return (
        <ul className="nav">
            <a href="#about"><li id="about-nav">about</li></a>
            <a href="#skills"><li id="skill-nav">skills</li></a>
            <a href="#projects"><li id="project-nav">projects</li></a>
            <a href="#contact"><li id="contact-nav">contact</li></a>
        </ul>
    )
}

export default Nav