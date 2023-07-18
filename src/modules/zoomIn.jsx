import React from 'react';
import { Card } from '@mui/material';

const Zoom = ({ pic }) => {

  return (
      <Card component="img" src={pic} style={{height: '90%', border: '10px solid #fff4de'}}></Card>
  );
};

export default Zoom;