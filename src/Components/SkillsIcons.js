import React from "react";

function SkillsIcon({ skill, mouseEnter, mouseLeave, displayModal }) {
  return (
    <div
      className={`icon-full hover`}
      id={skill.id}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      onClick={() => displayModal(skill)}
    >
      <div className="icon-img">
        <img src={skill.src} alt={skill.id} />
      </div>
      <h3> {skill.title} </h3>
      <p>{skill.desc}</p>
    </div>
  );
}

export default SkillsIcon;
