import React, { useState, useEffect } from "react";
import SkillsIcon from "./SkillsIcons";

function SkillsModal( {skill, isDisplayed, exitModal, hiding, setHiding} ) {

  return (
    <div id={`skills-modal`} className={`${!hiding ? '' : 'hide'} ${isDisplayed ? 'fade-in' : 'fade-out'}`}>
      <div
        className={`icon-full`}
        id={skill.id}
      >
        <div className="icon-img">
          <div className={`invisible`}></div>
          <img src={skill.src} alt={skill.id} />
          <button className={`close`} onClick={()=>exitModal()}>✖</button>
        </div>
        <h3> {skill.title} </h3>
        <p>{skill.desc}</p>
        <a className={`view-projects`} href="#projects" onClick={()=>exitModal()}>view projects<span>🡣</span></a>
      </div>
    </div>
  );
}

export default SkillsModal;
