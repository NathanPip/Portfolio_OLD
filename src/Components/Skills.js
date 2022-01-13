import React, { useState, useEffect } from 'react'
import SkillsIcon from './SkillsIcons';

function Skills({ skills }) {

    const [index, setIndex] = useState(0);
    const [isAnimating, setAnimating] = useState(false);
    const [canAnimate, setCanAnimate] = useState(true);
    const [iconsDisplayed, setIconsDisplayed] = useState(window.innerWidth > 400 ? Math.floor(window.innerWidth / 400) : 1);
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    useEffect(() => {
        const interval = setInterval(() => {
            if (canAnimate)
                startAnimation();
        }, 4000);
        return () => clearInterval(interval);
    }, [index, canAnimate]);

    useEffect(() => {
        function updateIcons() {
            if (window.innerWidth > 400) {
                setIconsDisplayed(Math.floor(window.innerWidth / 400));
            }
            else {
                setIconsDisplayed(1);
            }
        }
        window.addEventListener('resize', updateIcons);
        return () => window.removeEventListener('resize', updateIcons)
    }, []);

    function rotateSkills(num) {
        num += iconsDisplayed;
        if (num > skills.length - 1)
            return num % skills.length;
        return num;
    }

    function startAnimation() {
        setAnimating(true);
    }

    function onAnimationEnd() {
        setAnimating(false);
        setCanAnimate(true);
    }

    function startStopAnimation(toggle) {
        toggle ? setAnimating(true) : setAnimating(false);
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
                displayed.push(
                    <SkillsIcon key={i.toString()} skill={i <= skills.length - 1 ? skills[i] : skills[i % skills.length]} mouseEnter={() => toggleAnimation(false)} mouseLeave={() => toggleAnimation(true)} />
                )
            }
            return displayed;
        } else {
            for (let i = rotateSkills(index); i < iconsDisplayed + rotateSkills(index); i++) {
                next.push(
                    <SkillsIcon key={i.toString()} skill={i <= skills.length - 1 ? skills[i] : skills[i % skills.length]} mouseEnter={() => toggleAnimation(false)} mouseLeave={() => toggleAnimation(true)} />
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
                    {handleDisplayedIcons(true)}
                </div>
                <div className={`skills-icons ${isAnimating ? 'animating' : ''}`} onClick={startAnimation} onAnimationEnd={onAnimationEnd}>
                    {handleDisplayedIcons(false)}
                </div>
            </div>
        </div>
    )
}

export default Skills;