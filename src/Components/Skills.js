import React, { useState, useEffect } from 'react'
import SkillsIcon from './SkillsIcons';


function Skills({ skills }) {

    const [index, setIndex] = useState(0);
    const [isAnimating, setAnimating] = useState(false);
    const [canAnimate, setCanAnimate] = useState(true);
    const [iconsDisplayed, setIconsDisplayed] = useState(3);

    useEffect(() => {
        const interval = setInterval(() => {
            if (canAnimate)
                startAnimation();
            console.log(canAnimate)
        }, 4000);
        return () => clearInterval(interval);
    }, [index, canAnimate])

    function rotateSkills(num) {
        num += iconsDisplayed;
        if (num > skills.length - 1)
            return num % skills.length;
        return num;
    }

    function startAnimation() {
        console.log('animationStarted')
        setAnimating(true);
    }

    function onAnimationEnd() {
        console.log('animationEnded')
        setAnimating(false);
    }
    function toggleAnimation(toggle) {
        setCanAnimate(toggle);
    }

    function handleRotation() {
        setIndex(prevIndex => rotateSkills(prevIndex));
    }

    function handleDisplayedIcons(isCurrent) {
        let displayed = []
        let next = []
        if (isCurrent) {
            for (let i = index; i < iconsDisplayed + index; i++) {
                console.log('current: ' + i + ' index: ' + index)
                displayed.push(
                    <SkillsIcon key={i.toString()} skill={i <= skills.length-1 ? skills[i] : skills[i % skills.length]} mouseEnter={() => toggleAnimation(false)} mouseLeave={() => toggleAnimation(true)} />
                )
            }
            return displayed;
        } else {
            for (let i = rotateSkills(index); i < iconsDisplayed + rotateSkills(index); i++) {
                console.log('next: ' + i)
                next.push(
                    <SkillsIcon key={i.toString()} skill={i <= skills.length-1 ? skills[i] : skills[i % skills.length]} mouseEnter={() => toggleAnimation(false)} mouseLeave={() => toggleAnimation(true)} />
                )
            }
            return next;
        }
    }

    const desktopTemplate = (
        skills.map((skill, index) => {
            return (
                <SkillsIcon skill={skills[index]} />
            )
        })
    )

    return (
        <div className="skills">
            <h2 className="skills-title">Skills</h2>
            <div className="skills-icons-container">
                <div className={`skills-icons ${isAnimating ? 'animating' : ''}`} onClick={startAnimation} onAnimationEnd={handleRotation}>
                    {/* <SkillsIcon key={skills[index].id.toString()} skill={skills[index]} mouseEnter={()=>toggleAnimation(false)} mouseLeave={()=>toggleAnimation(true)} /> */}
                    {handleDisplayedIcons(true)}
                </div>
                <div className={`skills-icons ${isAnimating ? 'animating' : ''}`} onClick={startAnimation} onAnimationEnd={onAnimationEnd}>
                    {/* <SkillsIcon key={index + 1} skill={skills[rotateSkills(index)]} mouseEnter={()=>toggleAnimation(false)} mouseLeave={()=>toggleAnimation(true)} /> */}
                    {handleDisplayedIcons(false)}
                </div>
            </div>
        </div>
    )
}

export default Skills;