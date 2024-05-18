import content from "../../../content";
import "./style.css";
import React from "react";
import phone from "../../../images/svg/phone.svg";
import email from "../../../images/svg/email.svg";

const ContactsElement = () => {
  const { my } = content;
  return (
    <div className="contacts-element">
      <a
        target="_blank"
        rel="noreferrer"
        className="link header__link"
        type="phone"
        href={`tel:${my.phone}`}
      >
        <img src={phone} alt="linkidin" width={24} height={24} />
        {my.phone}
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        className="link header__link"
        href={`mailto:${my.email}`}
      >
        <img src={email} alt="linkidin" width={24} height={24} />
        {my.email}
      </a>
    </div>
  );
};

export default ContactsElement;
