import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import BackGround2 from '../components/BackGround2';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div>
      <NavBar />
      <BackGround2 heading="Contact" text="Let's connect" />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Contact;