import '../styles/FooterStyle.css';
import { FaHome, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa';
import { GoMarkGithub } from 'react-icons/go';
import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={ 20 } style={{ color: 'white', marginRight: "2rem" }} />
                    <div>
                        <p></p>
                        <p></p>
                    </div>
                </div>
                <div className='phone'>
                    <FaPhone size={ 20 } style={{ color: 'white', marginRight: "2rem" }} /> 
                    <div>
                        <p></p>
                    </div>
                </div>
                <div className='email'>
                    <FaMailBulk size={ 20 } style={{ color: 'white', marginRight: "2rem" }} />
                    <div>
                        <p>castillochristian3@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className='right'>
                <h4>About Me</h4>
                <p>An aspiring Full Stack Software Developer</p>
                <div className='socials'>
                    <GoMarkGithub size={ 30 } style={{ color: 'white', marginRight: "1rem" }} />
                    <FaLinkedin size={ 30 } style={{ color: 'white', marginRight: "1rem" }} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;