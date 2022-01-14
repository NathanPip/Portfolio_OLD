import React, { useState, useEffect } from "react";
import SkillsIcon from "./SkillsIcons";
import SkillsModal from "./SkillsModal";

function Skills({ skills }) {
  const cardBreak = 400;
  const [index, setIndex] = useState(0);
  const [isAnimating, setAnimating] = useState(false);
  const [canAnimate, setCanAnimate] = useState(true);
  const [displaySkillsModal, setDisplaySkillsModal] = useState(false);
  const [modalSkill, setModalSkill] = useState(skills[0])
  const [iconsDisplayed, setIconsDisplayed] = useState(
    window.innerWidth > cardBreak
      ? Math.floor(window.innerWidth / cardBreak)
      : 1
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (canAnimate) startStopAnimation(true);
    }, 4000);
    return () => clearInterval(interval);
  }, [index, canAnimate]);

  useEffect(() => {
    function updateIcons() {
      if (window.innerWidth > cardBreak) {
        setIconsDisplayed(Math.floor(window.innerWidth / cardBreak));
      } else {
        setIconsDisplayed(1);
      }
    }
    window.addEventListener("resize", updateIcons);
    return () => window.removeEventListener("resize", updateIcons);
  }, []);

  const incrementIndex = (num) => {
    num += iconsDisplayed;
    return handleIndex(num);
  };

  const handleIndex = (num) => {
    if (num > skills.length - 1) return num % skills.length;
    return num;
  };

  const startStopAnimation = (toggle) => {
    toggle ? setAnimating(true) : setAnimating(false);
    setCanAnimate(true);
  };
  const toggleAnimation = (toggle) => {
    setCanAnimate(toggle);
  };

  const handleRotation = () => {
    setIndex((prevIndex) => incrementIndex(prevIndex));
  };

  const displayModalSkill = (isDisplayed, skill) => {
      setDisplaySkillsModal(isDisplayed)
      setModalSkill(skill)
      console.log(isDisplayed)
  }

  const handleDisplayedIcons = (isCurrent) => {
    let skillsArr = [];
    let num;
    if(isCurrent) {
        num = index;
    } else {
        num = incrementIndex(index);
    }
      for (let i = num; i < iconsDisplayed + num; i++) {
        skillsArr.push(
          <SkillsIcon
            key={i.toString()}
            skill={skills[handleIndex(i)]}
            mouseEnter={() => toggleAnimation(false)}
            mouseLeave={() => toggleAnimation(true)}
            isModal={false}
            toggleModal={displayModalSkill}
          />
        );
      }
      return skillsArr;
  };

  return (
    <div id="skills">
      <h2 className="skills-title">Skills</h2>
      <SkillsModal skill={modalSkill} isDisplayed={displaySkillsModal} exitModal={displayModalSkill}/>
      <div className="skills-icons-container">
        <div
          className={`skills-icons ${isAnimating ? "animating" : ""}`}
          onAnimationEnd={handleRotation}
        >
          {handleDisplayedIcons(true)}
        </div>
        <div
          className={`skills-icons ${isAnimating ? "animating" : ""}`}
          onAnimationEnd={() => startStopAnimation(false)}
        >
          {handleDisplayedIcons(false)}
        </div>
      </div>
    </div>
  );
}

export default Skills;
