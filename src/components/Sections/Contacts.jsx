import ContactsElement from "../elements/Contacts";
import Line from "../elements/Line";
import { Context } from "../../reducers";
import { useContext } from "react";

const Contacts = () => {
  const { state } = useContext(Context);
  const { lang } = state;

  return (
    <section className="contacts">
      <h3 id="contacts">{lang === "en" ? "CONTACTS" : "КОНТАКТЫ"}</h3>
      <Line />
      <ContactsElement />
    </section>
  );
};

export default Contacts;
