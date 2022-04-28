import React, { forwardRef } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

function SkillsCarousel({ skill, changeSkill }, ref) {
  return (
    <AnimationOnScroll
      className="skills__carousel"
      animateIn="slide-in-right"
      duration={1}
      offset={200}
      delay={500}
      animateOnce={true}
    >
      <button
        className="skills__carousel__left"
        onClick={() => changeSkill(-1, skill)}
      >
        {"<"}
      </button>
      <div className="skills__carousel__card__container">
        <div ref={ref} className="icon-full fade--in" id={skill.id}>
          <div className="icon-img">
            <img src={skill.src} alt={skill.id} />
          </div>
          <div className="icon-main">
            <h3 className="skills__card__title"> {skill.title} </h3>
            <p className="skills__card__desc">{skill.desc}</p>
            <a className="view__projects__button" href="#projects">
              view projects<span>🡣</span>
            </a>
          </div>
        </div>
      </div>
      <button
        className="skills__carousel__right"
        onClick={() => changeSkill(1, skill)}
      >
        {">"}
      </button>
    </AnimationOnScroll>
  );
}

export default forwardRef(SkillsCarousel);
