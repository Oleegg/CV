import content from "../../content";
import sprite from "../../images/svg/sprite.svg";
import "./Style.css";

const ContactsElement = () => {
  const my = content.my;
  return (
    <div className="contacts-element">
      <a
        target="_blank"
        rel="noreferrer"
        className="link header__link"
        type="phone"
        href={`tel:${my.phone}`}
      >
        <svg className="svg">
          <use xlinkHref={`${sprite}#phone`}></use>
        </svg>
        {my.phone}
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        className="link header__link"
        href={`mailto:${my.email}`}
      >
        <svg className="svg">
          <use xlinkHref={`${sprite}#mail`}></use>
        </svg>
        {my.email}
      </a>
    </div>
  );
};

export default ContactsElement;
