import React from 'react';
import { Grid, Stack } from '@mui/joy';
import { useTheme } from '@mui/material/styles';

const Job = ({ job }) => {

  const theme = useTheme();

  return (
    <Stack container spacing={0} sx={{ margin: "auto", width: "95%" }}>
      <Stack>
        <Grid container justifyContent="space-between" style={{fontSize: "18px"}}>
          <Grid xs={12} md={5}>
            <h3>{job.jobTitle}</h3>
          </Grid>
          <Grid xs={12} md={3} textAlign="center">
            <h4>{job.company}</h4>
          </Grid>
          <Grid xs={12} md={2} textAlign="right">
            <h5>{job.dateEmployed}</h5>
          </Grid>
        </Grid>
      </Stack>
      <Stack sx={{padding: "0 10px 0 25px"}}>
        <ul>
          {job.activities.map(activity => (
            <li>{activity}</li>
          ))}
        </ul>
      </Stack>
    </Stack>
  )
}

export default Job;