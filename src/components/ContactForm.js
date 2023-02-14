import React, { useState } from "react";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  //console.log(name);
  return (
    <>
      <form className="Contact-form">
        <div className="input-group">
          <label htmlFor="name" className="contact-label">
            Your name
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="contact-input"
            ></input>
          </label>
        </div>
        <div className="input-group">
          <label htmlFor="email" className="contact-label">
            Your Email
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="contact-input"
            ></input>
          </label>
        </div>
        <div className="input-group">
          <label htmlFor="message" className="contact-label">
            Message
            <textarea
              type="text"
              id="name"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="contact-input contact-textArea"
            ></textarea>
          </label>
        </div>
        <button type="submit" className="header-btn">
          Send
        </button>
      </form>
    </>
  );
};

export default ContactForm;
