
import { NavLink } from 'react-router-dom';
import '../styles/ProjectCardStyle.css';
import React from 'react';


const ProjectCard = ({ project }) => {
    return (
        <div className='work-container'>
            <div className='project-container'>
                <div className='project-card'>
                    <h2 className='project-name'>{ project.name }</h2>
                    <div className='project-description'>
                        <p>{ project.description }</p>
                        <div className='project-button'>
                            <NavLink to={ project.url } className='btn'>
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