import React from 'react'

function SkillsIcon({ skill, animating, current, mouseEnter, mouseLeave }) {


    const desktopTemplate = (
        <div className="icon" id={skill.id}>
            <img src={skill.src} alt={skill.id} />
        </div>

    )
    const mobileTemplate = (
        <div className={`icon-full`} id={skill.id} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
            <div className="icon-img">
                <img src={skill.src} alt={skill.id} />
            </div>
            <h3> {skill.title} </h3>
            <p>{skill.desc}</p>
        </div>
    )


    return mobileTemplate;
}



export default SkillsIcon;