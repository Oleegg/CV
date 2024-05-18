import content from "../../content";
import "./Header.css";
import React, { useContext, useEffect, useState } from "react";
import SocialElement from "./elements/Social";
import ContactsElement from "./elements/Contacts";
import photo from "../../images/img/22.jpg";
import { CHANGE_LANG, Context } from "../../reducers";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const my = content.my;
  const { state, dispatch } = useContext(Context);
  const { lang } = state;

  useEffect(() => {
    const html = document.documentElement;
    html.style.overflowY = isOpenMenu ? "hidden" : "visible";
  }, [isOpenMenu]);

  const changeLanguages = () => {
    const payload = lang === "ru" ? "en" : "ru";
    dispatch({ type: CHANGE_LANG, payload });
  };

  const burgerHandler = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <header className="header">
      <img src={photo} alt="i" className="header__logo" />
      <div className="header__content">
        <div className="header__title">
          <h1>
            {my.surname[`${lang}`]} {my.name[`${lang}`]}{" "}
          </h1>
          <h3>{my.profession}</h3>
        </div>
        <div className="header__social">{<SocialElement />}</div>
        <div className="header__contacts">{<ContactsElement />}</div>
        <div className="header__btn">
          <div
            onClick={burgerHandler}
            className={isOpenMenu ? "burger open" : "burger"}
          >
            <p className="burger__p">
              <span className="burger__span"></span>
            </p>
          </div>
          <button onClick={changeLanguages} className="leng-btn">
            <span></span>
            {lang === "ru" ? "EN" : "RU"}
          </button>
        </div>
        {/* <Menu isOpen={isOpenMenu} setIsOpen={setIsOpenMenu} /> */}
      </div>
    </header>
  );
};

export default Header;
