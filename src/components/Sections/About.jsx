import { useContext } from "react";
import content from "../../content";
import Line from "../elements/Line";
import "./Sections.css";
import { Context } from "../../reducers";

const About = () => {
  const { state } = useContext(Context);
  const { lang } = state;

  return (
    <section className="about">
      <h3 id="about">{lang === "en" ? "ABOUT" : "ОБО МНЕ"}</h3>
      <Line />
      <p>{content.sections.about[`${lang}`].text}</p>
    </section>
  );
};

export default About;
