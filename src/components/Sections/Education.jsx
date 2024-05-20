import { useContext } from "react";
import content from "../../content.js";
import certificate from "../../images/img/education.jpg";
import { Context } from "../../reducers/context.js";
import Line from "../elements/Line.jsx";

const Education = () => {
  const { state } = useContext(Context);
  const { lang } = state;

  return (
    <section className="education">
      <h3 id="education">{lang === "en" ? "EDUCATION" : "ОБРАЗОВАНИЕ"}</h3>
      <Line />
      <ul className="section-list">
        {content.sections.education.map((place, i) => (
          <li key={i} className="list-item">
            {place.link.length ? (
              <>
                <a
                  className="link"
                  target="_blank"
                  rel="noreferrer"
                  href={place.link}
                >
                  {place.name[`${lang}`]} {<br />}
                  <img className="education__img" src={certificate} alt="" />
                </a>
              </>
            ) : (
              <p>{place.name[`${lang}`]}</p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Education;
