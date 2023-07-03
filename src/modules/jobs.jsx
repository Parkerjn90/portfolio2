import React from 'react';
import Grid from '@mui/joy/Grid';
import { useTheme } from '@mui/material/styles';
import Job from './job.jsx';


const Jobs = ({ jobs }) => {

  const theme = useTheme();

  return (
    <div style={{ padding: "10px", fontFamily: `${theme.typography.fontFamily}`, color: `${theme.palette.fifth.main}` }} spacing={2}>
      <h2 style={{color: `${theme.palette.fourth.main}`, font: 'bold 30px "Cedarville Cursive"'}}>Professional Experience</h2>
      {jobs.map((job, index) => (
        <div style={{marginBottom: "15px"}}>
          <Job job={job} key={index+.1} />
        </div>
      ))}
    </div>
  )
}

export default Jobs;