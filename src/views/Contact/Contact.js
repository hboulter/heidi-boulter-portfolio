import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <h1 className="h1">Let's Connect!</h1>
      <div className="form">
        <form
          action="mailto:boulter.heidi@gmail.com"
          method="post"
          encType="text/plain"
        >
          {/* <input */}
          <textarea
            className="name"
            type="text"
            name="name"
            placeholder="Name"
            autoComplete="off"
            required
          />
          {/* <input */}
          <textarea
            className="email"
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="off"
            required
          />
          <textarea
            type="text"
            className="message"
            name="message"
            placeholder="Message"
            autoComplete="off"
            required
          />
          <input className="submit__button" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
