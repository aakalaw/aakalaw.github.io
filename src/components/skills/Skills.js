import React, { Component } from "react";
import Avatar from "../avatar/Avatar.js";
import SkillsMenu from "./SkillsMenu.js";
import { Helmet } from 'react-helmet';

export default class About extends Component {
  render() {
    return (
      <>
        <Helmet>
        <title>Skills | AAK</title>
        </Helmet>
        <Avatar page="skills" />
        <SkillsMenu />
      </>
    );
  }
}
