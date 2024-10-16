import content from "../../content";
import sprite from "../../images/svg/sprite.svg";
import Line from "../elements/Line";
import { useContext } from "react";
import { Context } from "../../reducers";

const Skills = () => {
  const { state } = useContext(Context);
  const { lang } = state;

  return (
    <section className="skills">
      <h3 id="skills">{lang === "en" ? "SKILLS & TOOLS" : "НАВЫКИ"}</h3>
      <Line />
      <ul className="section-list">
        {content.sections.skills.map((skill, i) => {
          const s = skill.toLowerCase();
          if (s === "css") {
            return (
              <li key={i} className="skills__item">
                <svg className="svg">
                  <use xlinkHref={`${sprite}#${s}`}></use>
                </svg>
                <svg className="svg">
                  <use xlinkHref={`${sprite}#scss`}></use>
                </svg>
                {skill}/SCSS
              </li>
            );
          } else if (s === "javascript") {
            return (
              <li key={i} className="skills__item">
                <svg className="svg">
                  <use xlinkHref={`${sprite}#${s}`}></use>
                </svg>
                <svg className="svg">
                  <use xlinkHref={`${sprite}#typescript`}></use>
                </svg>
                JS/TS
              </li>
            );
          } else {
            return (
              <li key={i} className="skills__item">
                <svg className="svg">
                  <use xlinkHref={`${sprite}#${s}`}></use>
                </svg>
                {skill}
              </li>
            );
          }
        })}
      </ul>
    </section>
  );
};

export default Skills;
