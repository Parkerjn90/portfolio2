import { React} from 'react';
import { Grid, Box } from '@mui/joy';
import { Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Thanks = ({ showThanks }) => {

  const theme = useTheme();

  const closeThanks = (e) => {
    e.preventDefault();
    showThanks();
  }

  return (
    <Grid container style={{padding: "10px", fontFamily: `${theme.typography.fontFamily}`, color:`${theme.palette.fifth.main}`}}>
      <Grid>
      <h2 style={{color: `${theme.palette.fourth.main}`, fontSize: '30px'}}>Thanks for contacting me!</h2>
      </Grid>
      <Grid
      sx={{}}>
        <Box display="flex" justifyContent="flex-end">
        <Button sx={{color: `${theme.palette.fifth.main}`}} onClick={closeThanks}>X</Button>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Thanks;