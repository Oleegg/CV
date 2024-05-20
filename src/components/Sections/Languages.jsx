import content from "../../content";
import Line from "../elements/Line";
import { Context } from "../../reducers";
import { useContext } from "react";

const Languages = () => {
  const { state } = useContext(Context);
  const { lang } = state;
  const text = content.sections.languages[`${lang}`];

  return (
    <section className="languages">
      <h3 id="languages">{lang === "en" ? "LANGUAGES" : "ЯЗЫКИ"}</h3>
      <Line />
      <div className="section-list">
        {text.map((el, i) => (
          <p key={i} className="section__item">
            {el.title}
            {` - `}
            {el.level}
          </p>
        ))}
      </div>
    </section>
  );
};

export default Languages;
