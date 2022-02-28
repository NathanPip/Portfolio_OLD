import React, { useState, useEffect } from "react";
import SkillsIcon from "./SkillsIcons";
import SkillsModal from "./SkillsModal";

function Skills({ skills }) {
  const cardBreak = 300;
  const [index, setIndex] = useState(0);
  const [isAnimating, setAnimating] = useState(false);
  const [canAnimate, setCanAnimate] = useState(true);
  const [animationDirection, setAnimationDirection] = useState("right");
  const [modalHiding, setModalHiding] = useState(true);
  const [modalDisplayed, setModalDisplayed] = useState(false);
  const [modalSkill, setModalSkill] = useState(skills[0]);
  const [iconsDisplayed, setIconsDisplayed] = useState(
    Math.min(window.innerWidth, 2200) > cardBreak
      ? Math.floor(Math.min(window.innerWidth, 2200) / cardBreak)
      : 1
  );
  //interval for rotating skills {set to every 4 seconds}
  useEffect(() => {
    const interval = setInterval(() => {
      if (canAnimate && !modalDisplayed) startStopAnimation(true, "right");
    }, 4000);
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
    return () => clearTimeout(timeout);
  }, [modalDisplayed]);

  //Skill Icons Functions

  //increments the index by number specified and return index within bounds
  const incrementDecrementIndex = (num, delta) => {
    num += iconsDisplayed * delta;
    return handleIndex(num);
  };

  //handles index making sure no out of bounds errors occur
  const handleIndex = num => {
    if (num > skills.length - 1) return num % skills.length;
    if (num < 0) return skills.length + num%skills.length;
    return num;
  };

  //toggles whether animation should start or stop
  const startStopAnimation = (toggle, direction) => {
    toggle ? setAnimating(true) : setAnimating(false);
    setCanAnimate(true);
    setAnimationDirection(direction);
  };

  //toggles whether element can animate
  const toggleAnimation = toggle => {
    setCanAnimate(toggle);
  };

  //sets new indices
  const handleRotation = (delta) => {
    setIndex(prevIndex => incrementDecrementIndex(prevIndex, delta));
  };

  //handles how many icons should be displayed and returns array of icons
  const handleDisplayedIcons = (isCurrent, direction) => {
    let skillsArr = [];
    let num;
    if (isCurrent) {
      num = index;
    } else if(!isCurrent && direction === "right") {
      num = incrementDecrementIndex(index, 1);
    } else if (!isCurrent && direction === "left") {
      num = incrementDecrementIndex(index, -1);
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
      <div className="full-skills-container">
        <button className="skills-left" onClick={()=>startStopAnimation(true, "left")}>🡠</button>
        <div className="skills-container">
          <div className="skills-icons-container">
            <div
              className={`skills-icons ${isAnimating ? "animating" : ""} ${animationDirection}-current`}
              onAnimationEnd={()=> animationDirection === "right" ? handleRotation(1) : handleRotation(-1)}
            >
              {handleDisplayedIcons(true, animationDirection)}
            </div>
            <div
              className={`skills-icons ${isAnimating ? "animating" : ""} ${animationDirection}`}
              onAnimationEnd={() => startStopAnimation(false, animationDirection)}
            >
              {handleDisplayedIcons(false, animationDirection)}
            </div>
          </div>
        </div>
        <button className="skills-right" onClick={()=>startStopAnimation(true, "right")}>🡢</button>
      </div>
    </div>
  );
}

export default Skills;
