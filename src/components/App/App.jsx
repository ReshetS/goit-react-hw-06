import ContactList from "../ContactList/ContactList";

import style from "./App.module.css";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";

export default function App() {
  return (
    <div>
      <h1 className={style.header}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
