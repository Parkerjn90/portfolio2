import React from 'react';
import Grid from '@mui/joy/Grid';
import { useTheme } from '@mui/material/styles';
import Project from './project.jsx';

const Experience = ({ experience }) => {

  const theme = useTheme();

  return (
    <Grid container style={{ padding: "10px", fontFamily: `${theme.typography.fontFamily}`, color: `${theme.palette.fifth.main}` }} spacing={2}>
      <Grid>
        <h2 style={{color: `${theme.palette.fourth.main}`, font: 'bold 30px "Cedarville Cursive"'}}>Past Projects</h2>
      </Grid>
      {experience.map((project, index) => (
        <Grid key={index}>
          <Project project={project}/>
        </Grid>
      ))}
    </Grid>
  )
}

export default Experience;
