import React, { useState } from "react";

function ContactUsForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!name || !email) {
      alert("please fill the values");
      return;
    }
    console.log({ name, email });
    setEmail ("");
    setName ("");
  };
  ;
  return (
    <form onSubmit={formSubmitHandler}>
      <label>
        Enter your name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        {/* {name} */}
      </label>
      <br />
      <label>
        Enter your email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        {/* {email} */}
      </label>
      <br />
      <button type="submit">Submit Form</button>
      <br />
    </form>
  );
}

export default ContactUsForm;
