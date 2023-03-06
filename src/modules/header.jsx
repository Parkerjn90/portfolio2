import React from 'react';
import Portrait from '../Me.jpeg';

const Header = () => {
  return <div>
    <div className="header-flex-2/3">
      <h1>Joy Parker</h1>
      <h2>Full Stack Software Developer</h2>
    </div>
    <div className="header-flex-1/3">
      <img className="me" src={Portrait} alt="self-portrait of Joy Parker"/>
    </div>
  </div>
}

export default Header;