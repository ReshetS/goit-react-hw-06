import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";
import style from "./Contact.module.css";

export default function Contact({ contact, onDelete }) {
  return (
    <div className={style.contact}>
      <div className={style.contactInfo}>
        <p className={style.contactName}>
          <BsFillPersonFill />
          &nbsp;
          {contact.name}
        </p>
        <p className={style.contactTel}>
          <BsFillTelephoneFill />
          &nbsp;
          <a href={`tel:${contact.number}`}>{contact.number}</a>
        </p>
      </div>
      <button
        className={style.contactDeleteBtn}
        onClick={() => onDelete(contact.id)}
      >
        Delete
      </button>
    </div>
  );
}
