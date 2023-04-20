import React from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import BackGround2 from '../components/BackGround2';
import ProjectCard from '../components/ProjectCard';
import ProjectCardData from '../components/ProjectCardData';

const Projects = () => {
  return (
    <div>
      <NavBar />
      <BackGround2 heading="Projects" text="Some of my recent projects" />
      <h1 className='project-heading'>Projects</h1>
      { ProjectCardData.map((project, index) => {
        return (
          <ProjectCard key={ index } project={ project } />
        )
      })}
      <Footer />
    </div>
  );
}

export default Projects;