import React from 'react';

const InTheWorks = ({projects}) => {
  return <>
    <h2>In The Works</h2>
    <h3>{projects.projectTitle}</h3>
    <p>{projects.projectDescription}</p>
    {projects.projectGifs.map(image => <img src={image} alt="gif to demo the website/project"/>)}
  </>
}

export default InTheWorks;