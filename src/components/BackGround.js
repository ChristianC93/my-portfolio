import '../styles/BackGroundStyles.css'
import texture from '../assets/texture.jpg'
import React from 'react'
import { Link } from 'react-router-dom';

const BackGround = () => {
  return (
    <div className='background'>
        <div className='mask'>
            <img className='intro-img' src={ texture } alt='intro-img'/>
        </div>
        <div className='content'>
            <h1>Software Developer</h1>
            <div>
                <Link to='/projects' className='btn'>Projects</Link>
                <Link to='/contact' className='btn btn-light'>Contact</Link>    
            </div>
        </div>
    </div>
  );
}

export default BackGround;