import React, { useRef, useState, useEffect } from "react";
import SkillsIcon from "./SkillsIcons";
import SkillsCarousel from "./SkillsCarousel";

function Skills({ skills }) {

  const cardRef = useRef();

  const [currentSkill, setCurrentSkill] = useState(skills[0]);
  const [animationDuration] = useState(500);

  useEffect(() => {
    const rotationTimer = setInterval(async () => {
      await changeSkill(1, currentSkill);
    }, 5000);
    return () => clearInterval(rotationTimer);
  }, [currentSkill]);

  const changeSkill = async (delta, skill) => {
    const index =
      (((skills.indexOf(skill) + delta) % skills.length) + skills.length) %
      skills.length;
    cardRef.current.classList.remove("fade--in");
    cardRef.current.classList.add("fade--out");
    await new Promise(resolve => setTimeout(resolve, animationDuration));
    setCurrentSkill(skills[index]);
    cardRef.current.classList.remove("fade--out");
    cardRef.current.classList.add("fade--in");
    return;
  };

  //handles how many icons should be displayed and returns array of icons
  const handleDisplayedIcons = () =>
    skills.map(skill => (
      <SkillsIcon key={skill.id} skill={skill} changeSkill={changeSkill} currentSkill={currentSkill} skills={skills} />
    ));

  return (
    <div id="skills">
      <h2 className="skills-title">Skills</h2>
      <div className="full-skills-container">
        <div className="skills-container">{handleDisplayedIcons()}</div>
        <SkillsCarousel skill={currentSkill} ref={cardRef} changeSkill={changeSkill} />
      </div>
    </div>
  );
}

export default Skills;
