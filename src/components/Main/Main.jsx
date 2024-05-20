import About from "../Sections/About";
import Contacts from "../Sections/Contacts";
import Education from "../Sections/Education";
import Hobby from "../Sections/Hobby";
import Languages from "../Sections/Languages";
import Projects from "../Sections/Projects";
import Skills from "../Sections/Skills";
import Social from "../Sections/Social";

import "./Main.css";

const Main = () => {
  return (
    <main className="main">
      <About />
      <div className="main__content">
        <Skills />
        <Hobby />
        <Projects />
        <Education />
        <Languages />
        <Contacts />
        <Social />
      </div>
    </main>
  );
};
export default Main;
