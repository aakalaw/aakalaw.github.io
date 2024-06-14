import React from "react";
import ContactMenu from "./ContactMenu";
import "./contact.css";
import { Helmet } from 'react-helmet';

const Contact = () => {
  return (
    <>
    <Helmet>
    <title>Contact | AAK</title>
    </Helmet>
      <ContactMenu />
    </>
  );
};

export default Contact;
