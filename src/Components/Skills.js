import React, { useState, useEffect } from "react";
import SkillsIcon from "./SkillsIcons";
import SkillsModal from "./SkillsModal";

function Skills({ skills }) {
  const cardBreak = 400;
  const [index, setIndex] = useState(0);
  const [isAnimating, setAnimating] = useState(false);
  const [modalHiding, setModalHiding] = useState(true);
  const [canAnimate, setCanAnimate] = useState(true);
  const [modalDisplayed, setModalDisplayed] = useState(false);
  const [modalSkill, setModalSkill] = useState(skills[0])
  const [iconsDisplayed, setIconsDisplayed] = useState(
    window.innerWidth > cardBreak
      ? Math.floor(window.innerWidth / cardBreak)
      : 1
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (canAnimate && !modalDisplayed) startStopAnimation(true);
    }, 4000);
    console.log(modalDisplayed);
    return () => clearInterval(interval);
  }, [index, canAnimate, modalDisplayed]);

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

  useEffect(() => {
    const timeout = setTimeout(() => {
      if(!modalDisplayed)
        setModalHiding(true)
    }, 500)
  },[modalDisplayed]);

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
            displayModal={displayModal}
            canHover={true}
          />
        );
      }
      return skillsArr;
  };


  const displayModal = (skill) => {
    setModalDisplayed(true)
    setModalHiding(false)
    setModalSkill(skill)
}

const closeModal = () => {
  setModalDisplayed(false)
  setCanAnimate(true)
}

  return (
    <div id="skills">
      <SkillsModal skill={modalSkill} isDisplayed={modalDisplayed} exitModal={closeModal} hiding={modalHiding} setHiding={setModalHiding}/>
      <h2 className="skills-title">Skills</h2>
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
