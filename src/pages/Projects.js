import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getDocs, collection } from 'firebase/firestore';
import Main from '../layouts/Main';
import Cell from '../components/Projects/Cell';
import { db } from '../firebase'; // Adjust the path to your Firebase config file

const Projects = () => {
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'projects'));
      const projectData = querySnapshot.docs.map((doc) => doc.data());
      setProjects(projectData);
    } catch (error) {
      console.error('Error fetching projects: ', error);
      // Handle error (e.g., set an error state)
    }
  };

  useEffect(() => {
    getProjects();
  }, []); // Empty dependency array ensures useEffect runs only once after initial render

  return (
    <Main
      title="Projects"
      description="Learn about AAK's projects."
    >
      <article className="post" id="projects">
        <header>
          <div className="title">
            <h2><Link to="/projects">Projects</Link></h2>
            <p>A selection of projects that I&apos;m proud of</p>
          </div>
        </header>
        {projects.map((project) => (
          <Cell
            data={project}
            key={project.title} // Assuming title is unique
          />
        ))}
      </article>
    </Main>
  );
};

export default Projects;
