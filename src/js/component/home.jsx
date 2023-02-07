import React, { useState } from "react";

import AddContact from "./AddContact";
import ContactList from "./ContactList";

//create your first component
const Home = () => {
  const [contacts, setContacts] = useState([
    {
      full_name: "Dave Bradley",
      email: "dave@gmail.com",
      agenda_slug: "my_super_agenda",
      address: "47568 NW 34ST, 33434 FL, USA",
      phone: "7864445566",
    },
    {
      full_name: "AMANDA Bradley",
      email: "dave@gmail.com",
      agenda_slug: "my_super_agenda",
      address: "47568 NW 34ST, 33434 FL, USA",
      phone: "7864445566",
    },
  ]);

  const [crudMode, setCrudMode] = useState('reading');


  const addContactHandler = (fullName, phone, email, address) => {
    setContacts([...contacts, { full_name: fullName, phone, email, address }]);
	setCrudMode('reading');
  };

  const deleteContactHandler = (index) => {
	// Borra el contacto que coincide con el índice
   console.log(index);
	setContacts(contacts.filter((c, i) => i!=index));
  };

  return (
    <div className="container">
      {crudMode=='creating' && <AddContact onAddContact={addContactHandler} />}
      {crudMode=='reading' && <div>
		<button onClick={()=>setCrudMode('creating')} className="btn btn-primary">Add Contact</button>
		<ContactList contacts={contacts} onDeleteContact={deleteContactHandler} />
	  </div>}
    </div>
  );
};

export default Home;
