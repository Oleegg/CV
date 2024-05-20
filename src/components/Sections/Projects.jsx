import content from "../../content";
import Line from "../elements/Line";
import { useContext } from "react";
import { Context } from "../../reducers";

const Projects = () => {
  const { state } = useContext(Context);
  const { lang } = state;

  return (
    <section className="projects">
      <h3 id="projects">{lang === "en" ? "PROGECTS" : "ПРОЕКТЫ"}</h3>
      <Line />
      <ul className="section-list projects__list">
        {content.sections.projects.map((project, i) => (
          <li key={i} className="section__item list-item">
            <a
              className="link"
              target="_blank"
              rel="noreferrer"
              href={project.link}
            >
              {project.title[`${lang}`]}
            </a>
            <br />
            {project.addition ? (
              <a
                className="link addition"
                target="_blank"
                rel="noreferrer"
                href={project.addition.link}
              >
                {project.addition.title[`${lang}`]}
              </a>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
