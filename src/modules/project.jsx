import React from 'react';
import Grid from '@mui/joy/Grid';
import { useTheme } from '@mui/material/styles';

const Project = ({ project }) => {

  const theme = useTheme();

  return (
    <>
      <div>
        <Grid container spacing={0}>
          <Grid xs={9} md={7}>
            <h4 style={{
              fontSize: "25px",
              display: "inline",
              margin: "0 20px 10px 20px"
            }}
            >{project.title}
            </h4><a
              href={project.site}
              style={{ color: `${theme.palette.fourth.main}` }}
            >GitHub Link
            </a>
            <h5 style={{ fontSize: "18px" }}>{project.goal}</h5>
            <p>{project.description}</p>
          </Grid>
          <Grid xs={12} md={5} sx={{ width: "100px", display: "block" }}>
            <img
              src={project.gif}
              className="placeholder"
              alt="gif depicting what the website in question looks like and some of its functionality"
              style={{ width: "20em", display: "block", float: "right", marginRight: "10px", border: `4px solid ${theme.palette.fourth.main}`, borderRadius: "5px" }} />
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Project;