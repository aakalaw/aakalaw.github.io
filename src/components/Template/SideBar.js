import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.png`} alt="" />
      </Link>
      <header>
        <h6>ANGELO AARON KALAW</h6>
        <ul className="actions">
          <li>
            {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
          </li>
        </ul>
      </header>
    </section>

    <section className="blurb">
      <h1>About</h1>
      <p>Hi, you can call me AA for short if you want. I am a Computer Engineering undergrad.
        I have more than four years of work experience in CAD Operations
        who wants to shift and cross the threshold of Full Stack Development.
      </p>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; ANGELO AARON KALAW <Link to="/">aakalaw.github.io</Link>.</p>
    </section>
  </section>
);

export default SideBar;
