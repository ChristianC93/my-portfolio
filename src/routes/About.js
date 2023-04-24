import React from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import BackGround2 from '../components/BackGround2';
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
      <NavBar />
      <BackGround2 heading="About Me" text="A software delevoper out of New York" />
      <AboutContent />
      <Footer />
    </div>
  );
}

export default About;