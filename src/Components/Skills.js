import React, { useState, useEffect } from 'react'
import SkillsIcon from './SkillsIcons';


function Skills({ skills }) {

    const [index, setIndex] = useState(0);
    const [isAnimating, setAnimating] = useState(false);
    const [canAnimate, setCanAnimate] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            if(canAnimate)
                startAnimation();
            console.log(canAnimate)
        }, 4000);
        return () => clearInterval(interval);
    }, [index, canAnimate])

    function rotateSkills(num) {
        num += 1
        if (num > skills.length - 1)
            num = 0;
        return num;
    }

    function startAnimation() {
        setAnimating(true);
    }

    function onAnimationEnd() {
        handleRotation()
        setAnimating(false);
    }

    function setCanAnimateFalse () {
        setCanAnimate(false);
    }

    function setCanAnimateTrue () {
        setCanAnimate(true);
    }

    function handleRotation() {
        setIndex(prevIndex => rotateSkills(prevIndex));
    }

    const desktopTemplate = (
        skills.map((skill, index) => {
            return (
                <SkillsIcon skill={skills[index]} />
            )
        })
    )

    const mobileTemplate = (
        <div className="skills-icons" onClick={startAnimation}>
            <SkillsIcon animationFinished={onAnimationEnd} key={skills[index].id.toString()} skill={skills[index]} animating={isAnimating} current={true} mouseEnter={setCanAnimateFalse} mouseLeave={setCanAnimateTrue} />
            <SkillsIcon animationFinsished={onAnimationEnd} key={index + 1} skill={skills[rotateSkills(index)]} animating={isAnimating} current={false} mouseEnter={setCanAnimateFalse} mouseLeave={setCanAnimateTrue} />
        </div>
    )

    return (
        <div className="skills">
            <h2 className="skills-title">Skills</h2>
                {mobileTemplate}
        </div>
    )
}

export default Skills;