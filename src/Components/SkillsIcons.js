import React from 'react'

function SkillsIcon({ skill, animating, current, animationFinished, mouseEnter, mouseLeave}) {


    const desktopTemplate = (
        <div className="icon" id={skill.id}>
            <img src={skill.src} alt={skill.id} />
        </div>

    )
    const mobileTemplate = (
        <div className={`icon-full ${animating ? 'animating' : ''} ${current ? 'current' : 'next'}`} id={skill.id} onAnimationEnd={animationFinished} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
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