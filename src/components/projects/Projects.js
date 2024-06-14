import React, { Component } from "react";
import ProjectsMenu from "./ProjectsMenu.js";
import { Helmet } from 'react-helmet';

export default class Projects extends Component {
  render() {
    return (
      <>
      <Helmet>
      <title>Projects | AAK</title>
      </Helmet>
        <ProjectsMenu />
      </>
    );
  }
}
