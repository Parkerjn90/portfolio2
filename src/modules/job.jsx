import React from 'react';
import Logo from '../logo.svg';

const Job = ({job}) => {
  return <div className="flex-box-1">
  <h4>{job.jobTitle}</h4><h4>{job.company}</h4>
  <h5>{job.dateEmployed}</h5>
  <ul>
    {job.activities.map(activity => <li>{activity}</li>)}
  </ul>
  <img src={Logo} className="placeholder" alt="placeholder"/>
</div>
}

export default Job;