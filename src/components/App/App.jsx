import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import ContactList from "../ContactList/ContactList";

import style from "./App.module.css";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";

const initialContactsList = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function getInitialContactList() {
  const savedContactList = JSON.parse(
    window.localStorage.getItem("current-contact-list")
  );
  return savedContactList ? savedContactList : initialContactsList;
}

export default function App() {
  const [contacts, setContacts] = useState(getInitialContactList);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    window.localStorage.setItem(
      "current-contact-list",
      JSON.stringify(contacts)
    );
  }, [contacts]);

  function addContact(name, number) {
    setContacts((prevContacts) => [
      ...prevContacts,
      { id: nanoid(), name, number },
    ]);
  }

  function deleteContact(id) {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  }

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
  );

  return (
    <div>
      <h1 className={style.header}>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <SearchBox query={searchQuery} onSearch={setSearchQuery} />
      {filteredContacts.length === 0 ? (
        <p className={style.noContactsMessage}>
          {contacts.length === 0
            ? "There are no contacts in a phonebook"
            : "There are no contacts matching your query"}
        </p>
      ) : (
        <ContactList contacts={filteredContacts} onDelete={deleteContact} />
      )}
    </div>
  );
}
