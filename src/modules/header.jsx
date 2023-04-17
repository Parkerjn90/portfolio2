import React from 'react';
import Grid from '@mui/joy/Grid';

const Header = () => {
  return (
    <div className="header">
      <div className="innerHeader">
        <Grid container spacing={0} sx={{ flexGrow: 1 }}>
          <Grid xs={8}>
            <h1>Joy Parker &#32;	</h1><h1 className="subtitle">&#32; - Full Stack Software Developer</h1>
            <p style={{ color: "#b1bf9e", fontSize: "15px" }}>
              Front End | JavaScript (ES5 and ES6), React, HTML5, CSS3, Styled-Components, SASS, Axios, AJAX <br />
              Back End | Node.js, Express, MySQL, SQLite, MongoDB, Mongoose, PostgreSQL, PGAdmin, RESTful API Development<br />
              Testing/Deployment | Jest, Mocha, Chai, AWS: EC2<br />
              Developer Tools | Vim, Git, npm, yarn, Webpack, Babel, Postman
            </p>
          </Grid>
          <Grid xs={4}>
            <img className="me" src='https://i.ibb.co/93Bpmjt/Profile-Main.png' alt="self-portrait of Joy Parker" style={{ height: "140px", border: "5px solid #fff4de", borderRadius: "5px" }} />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Header;