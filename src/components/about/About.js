import React, { Component } from "react";
import Avatar from "../avatar/Avatar.js";
import AboutMenu from "./AboutMenu.js";
import { Helmet } from 'react-helmet';

export default class About extends Component {
  render() {
    return (
      <>
       <Helmet>
        <title>About | AAK</title>
        </Helmet>
        <Avatar page="about" />
        <AboutMenu />
      </>
    );
  }
}
