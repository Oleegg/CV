import content from "../../content";
import sprite from "../../images/svg/sprite.svg";
import "./Style.css";

const SocialElement = () => {
  const my = content.my;
  return (
    <div className="social-element">
      <a
        target="_blank"
        rel="noreferrer"
        className="link header__link"
        href={my.linkedin}
      >
        <svg className="svg">
          <use xlinkHref={`${sprite}#linkidin`}></use>
        </svg>
        My linkedin
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        className="link header__link"
        href={my.github}
      >
        <svg className="svg">
          <use xlinkHref={`${sprite}#github`}></use>
        </svg>
        My github
      </a>
    </div>
  );
};

export default SocialElement;
