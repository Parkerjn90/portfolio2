import { React } from 'react';
import { Grid, Box } from '@mui/joy';
import { Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Thanks = () => {

  const theme = useTheme();

  return (
    <>
      <div
        container
        style={{
          padding: "10px",
          fontFamily: `${theme.typography.fontFamily}`,
          color: `${theme.palette.fifth.main}`,
          width: '90%',
          backgroundColor: '#fff4de',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          borderRadius: '5px'
        }}>
          <h2 style={{ color: `${theme.palette.fourth.main}`, fontSize: '30px', margin: '0 auto'}}>Thanks for getting in touch!</h2>
      </div>
    </>
  )
}


export default Thanks;