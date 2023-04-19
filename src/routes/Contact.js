import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import BackGround2 from '../components/BackGround2';

const Contact = () => {
  return (
    <div>
      <NavBar />
      <BackGround2 heading="Contact" text="Let's connect" />
      <Footer />
    </div>
  );
}

export default Contact;