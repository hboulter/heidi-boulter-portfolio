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
          Name* <input className="name" type="text" name="name" required />
          Email* <input className="email" type="email" name="email" required />
          Message*
          <textarea
            type="text"
            className="textarea"
            name="message"
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
