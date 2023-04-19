import React from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import BackGround2 from '../components/BackGround2';

const Project = () => {
  return (
    <div>
      <NavBar />
      <BackGround2 heading="Projects" text="Some of my recent projects" />
      <Footer />
    </div>
  );
}

export default Project;