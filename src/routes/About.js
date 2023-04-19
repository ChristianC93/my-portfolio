import React from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import BackGround2 from '../components/BackGround2';

const About = () => {
  return (
    <div>
      <NavBar />
      <BackGround2 heading="About Me" text="A software delevoper in New York" />
      <Footer />
    </div>
  );
}

export default About;