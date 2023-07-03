import { Link } from 'react-router-dom';
import '../styles/AboutContentStyle.css'
import React from 'react'
import JS from '../assets/Js.webp';
import rails from '../assets/rails.png';



const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who Am I?</h1>
            <p>I am a software delevoper based in New York City. My skills include JavaScript, React, Redux, CSS, Ruby on Rails, SQL, and Git</p>
            <Link to='/contact'>
                <button className='btn'>Contact</button>
            </Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src={ JS } className='img' alt='jsimg'/>
                </div>
                <div className='img-stack bottom'>
                    <img src={ rails } className='img' alt='railsimg'/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default AboutContent;