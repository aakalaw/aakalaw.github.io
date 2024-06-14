import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav.js";
import About from "./components/about/About.js";
import Skills from "./components/skills/Skills.js";
import Projects from "./components/projects/Projects.js";
import Contact from "./components/contact/Contact.js";
import "./App.css";
import Background from "./components/background/Background.js";
import PlayerStats from "./components/playerStats/PlayerStats.js";

const App = () => {
  return (
    <Router>
      <Nav />
      <Background />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <PlayerStats />
    </Router>
  );
};

export default App;
