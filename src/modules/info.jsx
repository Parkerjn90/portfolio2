import { React} from 'react';
import Grid from '@mui/joy/Grid';
import { useTheme } from '@mui/material/styles';

const Info = () => {

  const theme = useTheme();

  return (
    <Grid container style={{padding: "10px", fontFamily: "Gentium Book Plus", color:`${theme.palette.fifth.main}`}}>
      <Grid>
      <h2 style={{color: `${theme.palette.fourth.main}`, font: 'bold 30px "Cedarville Cursive"'}}>About Me</h2>
      </Grid>
      <Grid>
      <div className="inner-text">
        <h3>My Professional Background:&#32;</h3>
        <p>I spent the first 8 years of my career developing a joy for working
          with people of diverse backgrounds - I was a high school French teacher.
          Through this experience I also continued to develop a love I&#39;ve had my whole life of
          solving puzzles and complex problems. I should have been a math teacher.
          When the time came for me to transition into a new career, it was clear that
          I needed something that would challenge me and continue to allow me to work with
          all manner of people and solve all manner of problems. Coding has allowed me to work
          with people from all around the globe without leaving my desk. I find joy solving coding
          challenges -  I even like hunting bugs. I have worked hard to become an effective pair
          programming partner. I participate fully in retrospectives. I can work on agile teams
          and ensure everyone&#39;s voice is included in the discussion.
        </p>
      </div>
      </Grid>
    </Grid>
  )
}

export default Info;