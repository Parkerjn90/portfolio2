import {React, useState} from 'react';
import './App.css';
import Header from './modules/header.jsx';
import Info from './modules/info.jsx';
import Experience from './modules/experience.jsx';
import Jobs from './modules/jobs.jsx';
import InTheWorks from './modules/inTheWorks.jsx';

function App() {

  const [experience] = useState([
    {title: 'Questions and Answers Service',
    goal: 'Front-End clothing retail application',
    site: 'github.com/Team-Pharos/FEC_Lighthouse',
    description: [
      'Implemented responsive search bar functionality within a  React component',
      'Optimized slow API response rate by compacting multiple Axios calls into one, resulting in five times more data returned in the same amount of time',
      'Developed reusable containers across the application using styled-components'
    ],
    gif: 'https://i.ibb.co/rvXHvLd/pharos.gif'
    },
    {title: 'E-commerce Product API',
    goal: 'Data migration and scaling',
    site: 'github.com/Great-Blue-Herons/Product-Overview',
    description: [
      'Designed schema in PostgreSQL to allow for efficient data migration',
      'Wrote queries within PGAdmin to quickly aggregate data resulting in an initial average of 346 requests per second',
      'Deployed to AWS server and increased average response time to 1000 requests per second'
    ],
    gif: 'https://i.ibb.co/hY61TGL/heron.png'
    },
    {title: 'Games Collective',
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
    {jobTitle: 'Lead Software Engineer Immersive Resident',
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
    {jobTitle: 'Clinical Screening Specialist',
      company: 'CastleBranch',
      dateEmployed: 'Jun 2020 - Feb 2022',
      activities: [
        'Cross-trained in proprietary software to direct incoming documents to the appropriate department and assign documentation submitted by email to the correct student accounts',
        'Promoted from Tier 1 to Tier 2 level reviewer within 4 months of completing training'
      ],
    },
    {jobTitle: 'French Teacher, Yearbook, Testing Coordinator, Department Chair',
        company: 'Graham High School',
        dateEmployed: 'Aug 2015 - Jun 2020',
        activities: [
          'Designed daily lessons for students at various levels of competency in the French language',
          'Trained teachers in national/state-wide testing practices to maintain student confidentiality and increase percent of students tested for the school',
          'Trained other teachers in educational technology to increase student engagement and skill-retention'
        ],
    },
    {jobTitle: 'French Teacher',
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

  const []

  return (
    <div className="App main-box">
      <header className="App-header">
        <Header></Header>
        <Info></Info>
        <Experience experience={experience}></Experience>
        <Jobs jobs={jobs}></Jobs>
        <InTheWorks></InTheWorks>
      </header>
    </div>
  );
}

export default App;
