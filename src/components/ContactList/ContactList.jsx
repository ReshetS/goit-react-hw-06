import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import style from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const searchQuery = useSelector(selectNameFilter);
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
  );

  if (filteredContacts.length === 0) {
    return (
      <p className={style.noContactsMessage}>
        {contacts.length === 0
          ? "There are no contacts in a phonebook"
          : "There are no contacts matching your query"}
      </p>
    );
  }
  return (
    <ul className={style.contactList}>
      {filteredContacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}
