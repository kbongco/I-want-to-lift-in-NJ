import React, { useState } from 'react';

export default function Contact() {
  const [state, updateState] = useState({
    name: '',
    email: '',
    subject: '',
    message:''
  })

  const sent = e => {
    e.preventDefault();
  }

  const onInputChange = e => {
    const { name, value } = e.target 
    
    updateState({
      ...state,
      [name]: value
    });
  }

  return (
    <div className='form'>
      <h1>Contact me!</h1>
      <p>Got some feedback about the design? Want a gym to be added on here? or maybe you just want to say hi? Drop an email down below and I'll get back to you ASAP!</p>
      <h1>Form is still under construction :) </h1>
      <form className='contact' onSubmit={sent}>
        <label htmlFor='Name'>Name</label><br/>
        <input 
          type='text'
          id='name'
          value={state.name}
          placeholder="Your name here"
          onChange={onInputChange}
        />
        <br/>
        <label htmlFor='email'>Email</label><br />
        <input 
          type='text'
          id='email'
          value={state.email}
          placeholder='Your email here'
          onChange={onInputChange}
        />
        <br />
        <label htmlFor='subject'>Subject</label><br />
        <input 
          type='text'
          id='subject'
          value={state.subject}
          placeholder='Why you wanna email me?'
          onChange={onInputChange}
        />
        <br />
        <label htmlFor='message'>Message</label><br />
        <textarea
          type='textarea'
          name='message'
          value={state.message}
          rows='10'
          placeholder='Whats on your mind?'
          onChange={onInputChange}
        />
        <br />
        <button className='emailme' type='submit'>
          Email me!
        </button>
      </form>
    </div>
  )

}