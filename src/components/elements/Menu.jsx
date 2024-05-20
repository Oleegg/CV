import content from "../../content";
import { useContext } from "react";
import { Context } from "../../reducers";
import "./Style.css";

const Menu = ({ isOpen, setIsOpen }) => {
  const { state } = useContext(Context);
  const { lang } = state;

  const links = content.titles.map((el) => Object.keys(el)[0]);
  const titles = content.titles.map((el) => Object.values(el));

  return (
    <div className={isOpen ? "menu-wrapper open" : "menu-wrapper"}>
      <nav className="menu">
        <ul>
          {titles.map((title, i) => (
            <li key={i}>
              <a href={`#${links[i]}`} onClick={() => setIsOpen(false)}>
                {title[0][`${lang}`]}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
