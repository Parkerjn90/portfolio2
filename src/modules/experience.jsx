import React from 'react';
import Project from './project.jsx';

const Experience = ({projects}) => {

  return <div className="flex-box-1">
    <h2>Experience</h2>
    {projects.map((project, index) => <Project project={project} key={index}/>)}
  </div>
}

export default Experience;