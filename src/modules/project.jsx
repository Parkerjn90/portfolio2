import React from 'react';
import Logo from '../assets/logo.svg';

const Project = ({project}) => {
  return <div className="flex-box-1">
    <h4>{project.title}</h4><a href={project.site}>{project.site}</a>
    <h5>{project.goal}</h5>
    <p>{project.description}</p>
    <img src={project.gif} className="placeholder" alt="placeholder"/>
  </div>
}

export default Project;