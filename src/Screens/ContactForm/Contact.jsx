import axios from 'axios';
import React, { useState } from 'react';
import './Contact.css'

export default function Contact() {
 
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    const contacted = await axios.post(
      "https://api.airtable.com/v0/app2PwmQ9IIxH0rhV/Table%201",
      {
        fields: {
          name: name,
          email: email,
          subject: subject,
          message: message
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
  };

  return (
    <div class="form">
      <form onSubmit={handleSubmit}>
        <h2>Contact me!</h2>
        <p>
          Got a gym you want me to add into this list? Have some feedback about the design? 
          Want to help me out with this once I turn this into a long-term project? 
          Drop me a message and I'll get back to you ASAP
        </p>
        <label htmlFor="name">Name</label>
        <br></br>
        <input
          type="text"
          id="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <br></br>
        <br/>
        <label htmlFor="email">email</label><br/>
        <input
          type="url"
          name="url"
          id="url"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <br></br>

        <label htmlFor='subject'>subject</label><br/>
        <input
          type='text'
          id='subject'
          onChange={(e) => setSubject(e.target.value)}
          value={subject}
        />
        <br />
        
        <label htmlFor='message'>message</label><br/>
        <textarea
          type='textarea'
          id='message'
          cols='30'
          rows='5'
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          />
      </form>
      <button type='submit'>Contact me!</button>
    </div>
  );
}