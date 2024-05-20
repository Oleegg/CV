import SocialElement from "../elements/Social";
import Line from "../elements/Line";
import { useContext } from "react";
import { Context } from "../../reducers";

const Social = () => {
  const { state } = useContext(Context);
  const { lang } = state;

  return (
    <section className="social">
      <h3 id="social">{lang === "en" ? "SOCIAL" : "СОЦИАЛЬНЫЕ СЕТИ"}</h3>
      <Line />
      <SocialElement />
    </section>
  );
};

export default Social;
