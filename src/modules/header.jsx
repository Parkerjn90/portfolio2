import React from 'react';
import Grid from '@mui/joy/Grid';

const Header = ({ theme }) => {
  return (
    <>
      <Grid container spacing={1} sx={{ flexGrow: 1, margin: "auto" }} direction="row">
        <Grid xs={8}>
          <h1 className="name" style={{ font: 'bold 80px "Gentium Book Plus"', color: "#e5e5c8" }}>Joy Parker &#32;
          </h1><h1
            className="subtitle" style={{ font: "bold 30px 'Cedarville Cursive'", color: "#b1bf9e" }}>
            &#32; - Full Stack Software Developer
          </h1>
        </Grid>
        <Grid xs={4}>
          <img className="me" src='https://i.ibb.co/93Bpmjt/Profile-Main.png' alt="self-portrait of Joy Parker" style={{ height: "140px", border: "5px solid #fff4de", borderRadius: "5px" }} />
        </Grid>
        <Grid xs={12}>
          <p style={{ color: "#b1bf9e", fontSize: "15px", margin: "auto"}}>
            Front End | JavaScript (ES5 and ES6), React, HTML5, CSS3, Styled-Components, SASS, Axios, AJAX <br />
            Back End | Node.js, Express, MySQL, SQLite, MongoDB, Mongoose, PostgreSQL, PGAdmin, RESTful API Development<br />
            Testing/Deployment | Jest, Mocha, Chai, AWS: EC2<br />
            Developer Tools | Vim, Git, npm, yarn, Webpack, Babel, Postman
          </p>

        </Grid>
      </Grid>
    </>
  )
}

export default Header;