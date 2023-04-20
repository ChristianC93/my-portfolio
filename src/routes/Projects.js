import React from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import BackGround2 from '../components/BackGround2';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <div>
      <NavBar />
      <BackGround2 heading="Projects" text="Some of my recent projects" />
      <ProjectCard />
      <Footer />
    </div>
  );
}

export default Projects;