import React from 'react';
import Project from './project.jsx';

const Experience = ({experience}) => {

  return <div className="flex-box-1">
    <h2>Experience</h2>
    {experience.map((project, index) => <Project project={project} key={index}/>)}
  </div>
}

export default Experience;