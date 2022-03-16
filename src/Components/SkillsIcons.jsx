import React, {useState} from "react";

function SkillsIcon({ skill, changeSkill, currentSkill, skills }) {

  const [skillIndex] = useState(skills.indexOf(skill))

  return (
    <div
      className={`skills__icon`}
      id={skill.id}
      onClick={()=>changeSkill(skillIndex - skills.indexOf(currentSkill), currentSkill)}
    >
    <img className="skills__icon__img" src={skill.src} alt={skill.id} />
    <p className="skills__icon__title">{skill.title}</p>
    </div>
  );
}

export default SkillsIcon;
