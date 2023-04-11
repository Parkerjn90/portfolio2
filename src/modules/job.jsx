import React from 'react';

const Job = ({job}) => {
  return <div className="flex-box-1">
  <h4>{job.jobTitle}</h4><h4>{job.company}</h4>
  <h5>{job.dateEmployed}</h5>
  <ul>
    {job.activities.map(activity => <li>{activity}</li>)}
  </ul>
</div>
}

export default Job;