import React, { useRef } from 'react';

import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userID = process.env.REACT_APP_EMAILJS_USER_ID;

    emailjs
      .sendForm(serviceID, templateID, form.current, userID)
      .then(
        () => {
          /*
          eslint no-alert: 0
          */
          alert('Message successfully sent!');
          window.location.reload(false);
        },
        () => {
          alert('Failed to send the message, please try again');
        },
      );
  };

  return (
    <>
      <div className="contact-form">
        <form ref={form} onSubmit={sendEmail}>
          <ul>
            <input placeholder="Name" type="text" name="name" required />
            <input
              placeholder="Email"
              type="email"
              name="email"
              required
            />
            <input
              placeholder="Subject"
              type="text"
              name="subject"
              required
            />
            <textarea
              placeholder="Message"
              name="message"
              required
            />
            <input type="submit" className="flat-button" value="SEND" />
          </ul>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
