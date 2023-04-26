import React from 'react';
import Grid from '@mui/joy/Grid';
import { useTheme } from '@mui/material/styles';

const Header = () => {

  const theme = useTheme();

  return (
    <>
      <Grid container spacing={1} sx={{ flexGrow: 1, margin: "auto", display: "flex", alignItems: "center" }} direction="row">
        <Grid md={2} ></Grid>
        <Grid xs={12} md={5}>
          <h1 className="name" style={{ font: 'bold 80px "Gentium Book Plus"', color: `${theme.palette.secondary.main}` }}>Joy Parker &#32;
          </h1><h1
            className="subtitle" style={{ font: "bold 30px 'Cedarville Cursive'", color: `${theme.palette.third.main}` }}>
            &#32; - Full Stack Software Developer
          </h1>
        </Grid>
        <Grid md={3}>
          <img className="me" src='https://i.ibb.co/93Bpmjt/Profile-Main.png' alt="self-portrait of Joy Parker" style={{ height: "150px", border: `5px solid ${theme.palette.secondary.main}`, borderRadius: "5px", margin: "auto"}} />
        </Grid>
        <Grid md={2}></Grid>
        <p style={{ color: `${theme.palette.primary.main}`, font: '15px "Gentium Book Plus"', margin: "auto" }}>
          Front End | JavaScript (ES5 and ES6), React, HTML5, CSS3, Styled-Components, SASS, Axios, AJAX <br />
          Back End | Node.js, Express, MySQL, SQLite, MongoDB, Mongoose, PostgreSQL, PGAdmin, RESTful API Development<br />
          Testing/Deployment | Jest, Mocha, Chai, AWS: EC2<br />
          Developer Tools | Vim, Git, npm, yarn, Webpack, Babel, Postman
        </p>
      </Grid>
    </>
  )
}

export default Header;