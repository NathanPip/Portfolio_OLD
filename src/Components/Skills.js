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
  const [modalSkill, setModalSkill] = useState(skills[0]);
  const [iconsDisplayed, setIconsDisplayed] = useState(
    window.innerWidth > cardBreak
      ? Math.floor(window.innerWidth / cardBreak)
      : 1
  );
  //interval for rotating skills {set to every 4 seconds}
  useEffect(() => {
    const interval = setInterval(() => {
      if (canAnimate && !modalDisplayed) startStopAnimation(true);
    }, 4000);
    console.log(modalDisplayed);
    return () => clearInterval(interval);
  }, [index, canAnimate, modalDisplayed]);

  //event listener for window resizing
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

  //timeout function for modal animation ending so modal is not set to hide before animation finsishes
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!modalDisplayed) setModalHiding(true);
    }, 500);
  }, [modalDisplayed]);

  //Skill Icons Functions

  //increments the index by number specified and return index within bounds
  const incrementIndex = num => {
    num += iconsDisplayed;
    return handleIndex(num);
  };

  //handles index making sure no out of bounds errors occur
  const handleIndex = num => {
    if (num > skills.length - 1) return num % skills.length;
    return num;
  };

  //toggles whether animation should start or stop
  const startStopAnimation = toggle => {
    toggle ? setAnimating(true) : setAnimating(false);
    setCanAnimate(true);
  };

  //toggles whether element can animate
  const toggleAnimation = toggle => {
    setCanAnimate(toggle);
  };

  //sets new indices
  const handleRotation = () => {
    setIndex(prevIndex => incrementIndex(prevIndex));
  };

  //handles how many icons should be displayed and returns array of icons
  const handleDisplayedIcons = isCurrent => {
    let skillsArr = [];
    let num;
    if (isCurrent) {
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

  //sets display modal state properties and defines modal skill
  const displayModal = skill => {
    setModalDisplayed(true);
    setModalHiding(false);
    setModalSkill(skill);
  };

  //closes the modal
  const closeModal = () => {
    setModalDisplayed(false);
    setCanAnimate(true);
  };

  return (
    <div id="skills">
      <SkillsModal
        skill={modalSkill}
        isDisplayed={modalDisplayed}
        exitModal={closeModal}
        hiding={modalHiding}
      />
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
