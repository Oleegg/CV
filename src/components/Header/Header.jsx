import content from "../../content";
import "./Header.css";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const my = content.my;

  useEffect(() => {
    const html = document.documentElement;
    html.style.overflowY = isOpenMenu ? "hidden" : "visible";
  }, [isOpenMenu]);

  // const changeLanguages = () => {
  //   const Languages = lang === "ru" ? "en" : "ru";
  //   dispatch(changeLang({ Languages }));
  // };

  const burgerHandler = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <header className="header">
      <img src="" alt="i" className="header__logo" />
      <div className="header__content">
        <div className="header__title">
          <h1>333{/* {my.surname[`${lang}`]} {my.name[`${lang}`]} */}</h1>
          <h3>{my.profession}</h3>
        </div>
        <div className="header__social">{/* <SocialElement /> */}</div>
        <div className="header__contacts">{/* <ContactsElement /> */}</div>
        <div className="header__btn">
          <div
            onClick={burgerHandler}
            className={isOpenMenu ? "burger open" : "burger"}
          >
            <p className="burger__p">
              <span className="burger__span"></span>
            </p>
          </div>
          <button /* onClick={changeLanguages} */ className="leng-btn">
            <span></span>
            {/* {lang === "ru" ? "EN" : "RU"} */}
          </button>
        </div>
        {/* <Menu isOpen={isOpenMenu} setIsOpen={setIsOpenMenu} /> */}
      </div>
    </header>
  );
};

export default Header;
