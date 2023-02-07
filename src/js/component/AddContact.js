import React, { useState } from "react";

const AddContact = ({ onAddContact }) => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddContact(fullName, phone, email, address);
    setFullName("");
    setAddress("");
    setEmail("");
    setPhone("");
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-3">Add New Contact</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">
            Full Name
          </label>
          <input
            onChange={(e) => setFullName(e.target.value)}
            type="text"
            className="form-control"
            id="fullName"
            placeholder="John Smith"
            value={fullName}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">
            Phone Number
          </label>
          <input
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            className="form-control"
            id="phoneNumber"
            placeholder="666777888"
            value={phone}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="emailAddress" className="form-label">
            Email Address
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control"
            id="emailAddress"
            placeholder="hello@company.com"
            value={email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="postalAddress" className="form-label">
            Postal Address{" "}
          </label>
          <input
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            className="form-control"
            id="postalAddress"
            placeholder="C/Call 3"
            value={address}
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary form-control">
            Add Contact
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddContact;
