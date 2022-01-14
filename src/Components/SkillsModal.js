import React from "react";
import SkillsIcon from "./SkillsIcons";

function SkillsModal( {skill, isDisplayed, exitModal} ) {
  return (
    <div className={`modal-background ${isDisplayed ? '' : 'hide'}`}>
      <div className="skills-modal">
          <SkillsIcon skill={skill} isModal={true} toggleModal={exitModal}/>
      </div>
    </div>
  );
}

export default SkillsModal;
