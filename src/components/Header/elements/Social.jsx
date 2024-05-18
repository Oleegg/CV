import content from "../../../content";
import React from "react";
import linkidin from "../../../images/svg/linkidin.svg";
import github from "../../../images/svg/github.svg";
import "./style.css";

const SocialElement = () => {
  const { my } = content;
  return (
    <div className="social-element">
      <a
        target="_blank"
        rel="noreferrer"
        className="link header__link"
        href={my.linkedin}
      >
        <img src={linkidin} alt="linkidin" width={24} height={24} />
        My linkedin
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        className="link header__link"
        href={my.github}
      >
        <img src={github} alt="github" width={24} height={24} />
        My github
      </a>
    </div>
  );
};

export default SocialElement;
