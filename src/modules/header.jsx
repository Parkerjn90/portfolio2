import React from 'react';
import Portrait from '../assets/Me.jpeg';

const Header = () => {
  return <div>
    <div className="header-flex-2/3">
      <h1>Joy Parker &#32;	</h1><h1 className="subtitle">&#32; - Full Stack Software Developer</h1>
      <p>
      Front End | JavaScript (ES5 and ES6), React, HTML5, CSS3, Styled-Components, SASS, Axios, AJAX <br/>
      Back End | Node.js, Express, MySQL, SQLite, MongoDB, Mongoose, PostgreSQL, PGAdmin, RESTful API Development<br/>
      Testing/Deployment | Jest, Mocha, Chai, AWS: EC2<br/>
      Developer Tools | Vim, Git, npm, yarn, Webpack, Babel, Postman
      </p>
    </div>
    <div className="header-flex-1/3">
      <img className="me" src='https://i.ibb.co/93Bpmjt/Profile-Main.png' alt="self-portrait of Joy Parker"/>
    </div>
  </div>
}

export default Header;