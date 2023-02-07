import React from "react";

const Contact = ({id, fullName, phone, email, address, deleteContact}) => {

  return (
    <div className="container">
        <div className="row">
          <div className="col-3"><img src="https://via.placeholder.com/150">
          </img> </div>
          <div className="col-6">
            <p>{fullName}</p>
            <p>{phone}</p>
            <p>{email}</p>
            <p>{address}</p>
          </div>
          <div className="col-3"><button className="btn btn-info">EDIT</button> <button onClick={()=> deleteContact(id)}
            className="btn btn-danger"> DELETE</button></div>
        </div>
    </div>
  );
};

export default Contact;
