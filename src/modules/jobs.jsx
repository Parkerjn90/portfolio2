import React from 'react';
import Job from './job.jsx';


const Jobs = ({experience}) => {
  return <div className="flex-box-1">
    <h2>Professional Experience</h2>
    {experience.map((job, index) => <Job job={job} key={index}/>)}
  </div>
}

export default Jobs;