import {React, useState} from 'react';
import './App.css';
import Header from './modules/header.jsx';
import Info from './modules/info.jsx';
import Experience from './modules/experience.jsx';
import Jobs from './modules/jobs.jsx';
import InTheWorks from './modules/inTheWorks.jsx';

function App() {

  const [projects, setProjects] = useState([
    {title: 'Questions and Answers Service',
    goal: 'Front-End clothing retail application',
    site: 'github.com/Team-Pharos/FEC_Lighthouse',
    description: [
      'Implemented responsive search bar functionality within a  React component',
      'Optimized slow API response rate by compacting multiple Axios calls into one, resulting in five times more data returned in the same amount of time',
      'Developed reusable containers across the application using styled-components'
    ]
    },
    {title: 'E-commerce Product API',
    goal: 'Data migration and scaling',
    site: 'github.com/Great-Blue-Herons/Product-Overview',
    description: [
      'Designed schema in PostgreSQL to allow for efficient data migration',
      'Wrote queries within PGAdmin to quickly aggregate data resulting in an initial average of 346 requests per second',
      'Deployed to AWS server and increased average response time to 1000 requests per second'
    ]
    },
    {title: 'Games Collective',
    goal: 'Full-stack application to aggregate video games, manage personal lists, search database, and participate in related threads',
    site: 'github.com/Jelly-Donut-Fish/GamesCollective',
    description: [
      'Led a team of eight developers to create a multi-page, full-stack application for video game management',
      'Leveraged React, Redux, and Axios to allow users to manage collections and view detailed information',
      'Implemented SASS for site-wide styling in dark mode to improve accessibility'
    ]
    },
    {title: 'Plant Planner',
    goal: 'Full-stack application to cloud source plant care information and to help users care for their house plants',
    site: 'n/a',
    description: [
      'n/a'
    ]
    },
  ]);

  return (
    <div className="App main-box">
      <header className="App-header">
        <Header></Header>
        <Info></Info>
        <Experience projects={projects}></Experience>
        <Jobs></Jobs>
        <InTheWorks></InTheWorks>
      </header>
    </div>
  );
}

export default App;
