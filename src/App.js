import { React, useState } from 'react';
import { Container, AppBar, Toolbar, Stack, Button } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from './modules/header.jsx';
import Info from './modules/info.jsx';
import Experience from './modules/experience.jsx';
import Jobs from './modules/jobs.jsx';
import InTheWorks from './modules/inTheWorks.jsx';

function App() {

  let theme = createTheme({
    palette: {
      primary: {
        main: '#fff4de'
      },
      secondary: {
        main: '#e5e5c8'
      },
      third: {
        main: '#b1bf9e'
      },
      fourth: {
        main: '#687f63'
      },
      fifth: {
        main: '#214028'
      }
    },
    typography: {
      fontFamily: [
        'Gentium Book Plus',
        'Cedarville Cursive',
        'source-code-pro',
        'Menlo', 'Monaco',
        'Consolas',
        '"Courier New"',
        'monospace'
      ].join(',')
    }
  });

  const [experience] = useState([
    {
      title: 'Questions and Answers Service',
      goal: 'Front-End clothing retail application',
      site: 'github.com/Team-Pharos/FEC_Lighthouse',
      description: [
        'Implemented responsive search bar functionality within a  React component',
        'Optimized slow API response rate by compacting multiple Axios calls into one, resulting in five times more data returned in the same amount of time',
        'Developed reusable containers across the application using styled-components'
      ],
      gif: 'https://i.ibb.co/rvXHvLd/pharos.gif'
    },
    {
      title: 'E-commerce Product API',
      goal: 'Data migration and scaling',
      site: 'github.com/Great-Blue-Herons/Product-Overview',
      description: [
        'Designed schema in PostgreSQL to allow for efficient data migration',
        'Wrote queries within PGAdmin to quickly aggregate data resulting in an initial average of 346 requests per second',
        'Deployed to AWS server and increased average response time to 1000 requests per second'
      ],
      gif: 'https://i.ibb.co/hY61TGL/heron.png'
    },
    {
      title: 'Games Collective',
      goal: 'Full-stack application to aggregate video games, manage personal lists, search database, and participate in related threads',
      site: 'github.com/Jelly-Donut-Fish/GamesCollective',
      description: [
        'Led a team of eight developers to create a multi-page, full-stack application for video game management',
        'Leveraged React, Redux, and Axios to allow users to manage collections and view detailed information',
        'Implemented SASS for site-wide styling in dark mode to improve accessibility'
      ],
      gif: 'https://i.ibb.co/rymLwkR/jellyfish.gif',
    },
  ]);

  const [jobs] = useState([
    {
      jobTitle: 'Lead Software Engineer Immersive Resident',
      company: 'Galvanize Inc.',
      dateEmployed: 'Jul 2022 - Jan 2023',
      activities: [
        'Instructed 100+ junior engineers in JavaScript, React, Node.js, and Database Management Systems',
        'Conducted daily code review to help students solidify CS concepts and discuss potential optimizations',
        'Refactored the Hack Reactor curriculum in collaboration with other engineers and educators',
        'Managed a diverse team of Software Engineering Immersive Residents to analyze student progress and ensure future success',
        'Contributed to academic curriculum codebase and led retrospectives for 40+ engineers on a weekly basis',
        'Interviewed, hired, and trained new software developers',
        'Established company-wide standard practices by creating and implementing new documents, resulting in increased efficiency and consistency in student support'
      ],
    },
    {
      jobTitle: 'Clinical Screening Specialist',
      company: 'CastleBranch',
      dateEmployed: 'Jun 2020 - Feb 2022',
      activities: [
        'Cross-trained in proprietary software to direct incoming documents to the appropriate department and assign documentation submitted by email to the correct student accounts',
        'Promoted from Tier 1 to Tier 2 level reviewer within 4 months of completing training'
      ],
    },
    {
      jobTitle: 'French Teacher, Yearbook, Testing Coordinator, Department Chair',
      company: 'Graham High School',
      dateEmployed: 'Aug 2015 - Jun 2020',
      activities: [
        'Designed daily lessons for students at various levels of competency in the French language',
        'Trained teachers in national/state-wide testing practices to maintain student confidentiality and increase percent of students tested for the school',
        'Trained other teachers in educational technology to increase student engagement and skill-retention'
      ],
    },
    {
      jobTitle: 'French Teacher',
      company: 'Fred T. Foard High School',
      dateEmployed: 'Jan 2013 - Jun 2015',
      activities: [
        'Designed daily lessons for students at various levels of competency in the French language',
        'Trained self and other teachers in Google Suite technologies',
        'Integrated technology into the classroom on a weekly basis',
        'Cultivated a caring and inclusive community within the classroom and throughout the school'
      ],
    },
  ]);

  const [projects] = useState({
    projectTitle: 'PokePlanner',
    projectDescription: `This past fall, I started playing pokemon again for the first time in maybe 20 years.
    It&apos;s safe to say there are way more pokemon now than there were when I was 12. I decided to build myself
    a little app to help me keep track of the various bits of information I needed to know about each animal so
    that I could more effectively play the game. So far, I've taken a lot of time to really plan out the app.
    Here's some of what I have so far.`,
    projectGifs: ['https://i.ibb.co/Q66TLLG/Screenshot-2023-04-11-at-2-01-14-PM.png', 'https://i.ibb.co/Pggx6M7/Screenshot-2023-04-11-at-2-00-54-PM.png'],
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg" alignItems="center" scrollPaddingTop={64}>
          <AppBar className="header" position="sticky" sx={{
            backgroundColor: `${theme.palette.fifth.main}`, padding: "5px", paddingRight: "20px"}}>
          <Header style={{ margin: "0 auto"}}></Header>
          <Toolbar sx={{margin: "0 auto"}}>
            <Stack direction="row" spacing={2}>
              <Button sx={{backgroundColor: `${theme.palette.fourth.main}`}} href="#info">About Me</Button>
              <Button sx={{backgroundColor: `${theme.palette.fourth.main}`}} href="#experience">Past Projects</Button>
              <Button sx={{backgroundColor: `${theme.palette.fourth.main}`}} href="#jobs">Work Experience</Button>
              <Button sx={{backgroundColor: `${theme.palette.fourth.main}`}} href="#works">Current Projects</Button>
              <Button sx={{backgroundColor: `${theme.palette.fourth.main}`}}>Contact Me</Button>
            </Stack>
          </Toolbar>
        </AppBar>

        <div className="content" style={{ backgroundColor: `${theme.palette.primary.main}d0`, padding: "15px", scrollPaddingTop: "30px" }}>
          <div id="info"><Info></Info></div>
          <div id="experience"><Experience experience={experience}></Experience></div>
          <div id="jobs"><Jobs jobs={jobs}></Jobs></div>
          <div id="works"><InTheWorks projects={projects}></InTheWorks></div>
        </div>
      </Container>
    </ThemeProvider>
    </>
  );
}

export default App;
