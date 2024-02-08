import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {PiMessengerLogoBold} from 'react-icons/pi'
import {PiWhatsappLogo} from 'react-icons/pi'

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xx2wiyr', 'template_kbln4oj', form.current, { publicKey: '6l7OX5mSa-qrb2g6z',})

    e.target.reset();
  };
  
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

    <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>angeloaaronkalaw@gmail.com</h5>
          <a href="mailto:angeloaaronkalaw@gmail.com" target="_blank">Send a message</a>
        </article>
        <article className="contact__option">
            <PiMessengerLogoBold className='contact__option-icon'/>
          <h4>Messenger</h4>
          <h5>angeloaaronkalaw</h5>
          <a href="https://m.me/angeloaaronkalaw" target="_blank">Send a message</a>
        </article>
        <article className="contact__option">
            <PiWhatsappLogo className='contact__option-icon'/>
          <h4>Whatsapp</h4>
          <h5>+1234567890</h5>
          <a href="https://api.whatsapp.com" target="_blank">Send a message</a>
        </article>
      </div>
    { /*END OF CONTACT OPTION */}  
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name' required />
        <input type="email" name='email' placeholder='Your Email' required />
        <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form> 
    </div>
    </section>
  )
}

export default Contact