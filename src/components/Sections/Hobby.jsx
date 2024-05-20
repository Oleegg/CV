import content from "../../content";
import Line from "../elements/Line";
import { Context } from "../../reducers";
import { useContext } from "react";

const Hobby = () => {
  const { state } = useContext(Context);
  const { lang } = state;

  return (
    <section className="hobby">
      <h3 id="hobby">{lang === "en" ? "HOBBY" : "ХОББИ"}</h3>
      <Line />
      <div className="section-list">
        {content.sections.hobby[`${lang}`].map((el, i) => (
          <p key={i} className="list-item section__item">
            {el}
          </p>
        ))}
      </div>
    </section>
  );
};

export default Hobby;
