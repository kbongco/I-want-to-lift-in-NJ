import axios from "axios";
import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://formspree.io/xleopplb",
      data: new FormData(form),
    })
      .then((r) => {
        handleServerResponse(
          true,
          "Thanks for your inquiry, I will get back to you ASAP",
          form
        );
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };
  return (
    <div>
      <h1>Contact me</h1>
      <p>
        Got a gym you want me to add into this list? Have some feedback about
        the design? Want to help me out with this once I turn this into a
        long-term project? Drop me a message and I'll get back to you ASAP
      </p>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="name">Name:</label>
        <br/>
        <input id="name" type="name" name="name" required /><br/>
        <label htmlFor="email">Email:</label><br/>
        <br/>
        <input id="email" type="email" name="email" required /><br/>
        <label htmlFor="message">Message:</label><br/>
        <br/>
        <textarea id="message" name="message" rows='15' ></textarea>
        <br/>
        <button type="submit" disabled={serverState.submitting}>
          Submit
        </button>
        {serverState.status && (
          <p className={!serverState.status.ok ? "errorMsg" : ""}>
            {serverState.status.msg}
          </p>
        )}
      </form>
    </div>
  );
}

export default Contact;
