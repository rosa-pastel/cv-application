import React, { useState } from "react";
export default function General(props) {
  const [fullName, setFullName] = useState("Pam Halpert");
  const [address, setAddress] = useState("383 Linden Avenue, Scranton, PA");
  const [mail, setMail] = useState("pambeesly@dundermifflin.com");
  const [phone, setPhone] = useState("(570) 555-0148");
  function updateName(e) {
    setFullName(e.target.value);
  }
  function updateAddress(e) {
    setAddress(e.target.value);
  }
  function updateMail(e) {
    setMail(e.target.value);
  }
  function updatePhone(e) {
    setPhone(e.target.value);
  }
  if (props.mode === "edit") {
    return (
      <div id="general" className="edit">
        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            defaultValue={fullName}
            onChange={(e) => updateName(e)}
          ></input>
        </label>
        <label htmlFor="address">
          Address
          <input
            type="text"
            id="address"
            defaultValue={address}
            onChange={(e) => updateAddress(e)}
          ></input>
        </label>
        <label htmlFor="mail">
          E-mail
          <input
            type="email"
            id="mail"
            defaultValue={mail}
            onChange={(e) => updateMail(e)}
          ></input>
        </label>
        <label htmlFor="phone">
          Phone Number
          <input
            type="tel"
            id="phone"
            defaultValue={phone}
            onChange={(e) => updatePhone(e)}
          ></input>
        </label>
      </div>
    );
  } else {
    return (
      <div id="general">
        <h1>{fullName}</h1>
        <p>{address}</p>
        <p>{mail}</p>
        <p>{phone}</p>
      </div>
    );
  }
}
