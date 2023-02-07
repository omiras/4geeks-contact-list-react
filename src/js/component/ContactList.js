import React from "react";
import Contact from "./Contact";

const ContactList = ({ contacts, onDeleteContact }) => {

    const handleDeleteContact = (index) => {
        onDeleteContact(index);
    };

  return (
    <ul className="list-group">
      {contacts.map((c, i) => (
        <li key={i} className="list-group-item">
          <Contact id={i} fullName={c.full_name} phone={c.phone} email={c.email} address={c.address} deleteContact={handleDeleteContact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
