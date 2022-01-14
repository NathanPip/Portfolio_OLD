import React from "react";

function SkillsIcon({
  skill,
  animating,
  current,
  mouseEnter,
  mouseLeave,
  isModal,
  toggleModal
}) {




    return (
      <div
        className={`icon-full`}
        id={skill.id}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        onClick={!isModal ? ()=>toggleModal(true, skill) : null}
      >
        <div className="icon-img">
          <img src={skill.src} alt={skill.id} />
          <button className={`close ${!isModal ? 'hide' : ''}`} onClick={()=>toggleModal(false, skill)}>✖</button>
        </div>
        <h3> {skill.title} </h3>
        <p>{skill.desc}</p>
        <a className={`view-projects ${!isModal ? 'hide' : ''}`} href="#projects" onClick={()=>toggleModal(false, skill)}>view projects</a>
      </div>
    );
}

export default SkillsIcon;
