import React from 'react';
import { Grid, Stack } from '@mui/joy'
import { useTheme } from '@mui/material/styles';

const InTheWorks = ({ projects }) => {

  const theme = useTheme();

  return (
    <div style={{ padding: "10px", fontFamily: `${theme.typography.fontFamily}`, color: `${theme.palette.fifth.main}` }}>
      <h2 style={{ color: `${theme.palette.fourth.main}`, font: 'bold 30px "Cedarville Cursive"' }}>In The Works</h2>
      <Stack container style={{ fontSize: "18px" }} spacing={2}>
        <h3 >{projects.projectTitle}</h3>
        <p style={{ width: "95%", paddingLeft: "10px" }}>{projects.projectDescription}</p>
        <Grid container spacing={0}>
          {projects.projectGifs.map((image, i) => (
            <Grid xs={12} md={6} lg={4}>
              <img src={image} key={i + .2} alt="gif to demo the website/project" style={{ width: "95%", margin: "auto"}} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </div>
  )
}

export default InTheWorks;