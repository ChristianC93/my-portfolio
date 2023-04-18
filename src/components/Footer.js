import '../styles/FooterStyle.css';
import { FaHome, FaMailBulk, FaPhone } from 'react-icons/fa';
import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={ 20 } style={{ color: 'white', marginRight: "2rem" }} />
                    <div>
                        <p>123 Spooner Street</p>
                        <p>America</p>
                    </div>
                </div>
                <div className='phone'>
                    <FaPhone size={ 20 } style={{ color: 'white', marginRight: "2rem" }} /> 
                    <div>
                        <p>1-888-8888</p>
                    </div>
                </div>
                <div className='email'>
                    <FaMailBulk size={ 20 } style={{ color: 'white', marginRight: "2rem" }} />
                    <div>
                        <p>email@email.com</p>
                    </div>
                </div>
            </div>
            <div className='right'></div>
        </div>
    </div>
  )
}

export default Footer;