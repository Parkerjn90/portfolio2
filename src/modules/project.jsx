import React from 'react';
import Logo from '../logo.svg';

const Project = ({project}) => {
  return <div className="flex-box-1">
    <h4>{project.title}</h4><a href={project.site}>Github</a>
    <h5>{project.goal}</h5>
    <p>{project.description}</p>
    <img src={Logo} className="placeholder" alt="placeholder"/>
  </div>
}

export default Project;