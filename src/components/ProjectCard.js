
import { NavLink } from 'react-router-dom';
import '../styles/ProjectCardStyle.css';
import React from 'react';


const ProjectCard = () => {
  return (
    <div className='work-container'>
        <h1 className='project-heading'>Projects</h1>
        <div className='project-container'>
            <div className='project-card'>
                <h2 className='project-name'>Title</h2>
                <div className='project-description'>
                    <p>project description</p>
                    <div className='project-button'>
                        <NavLink className='btn'>
                            Source
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ProjectCard;