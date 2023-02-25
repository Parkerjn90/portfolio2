import './App.css';
import Header from './modules/header.jsx';
import Info from './modules/info.jsx';
import Experience from './modules/experience.jsx';
import Jobs from './modules/jobs.jsx';
import InTheWorks from './modules/inTheWorks.jsx';

function App() {
  return (
    <div className="App main-box">
      <header className="App-header">
        <Header></Header>
        <Info></Info>
        <Experience></Experience>
        <Jobs></Jobs>
        <InTheWorks></InTheWorks>
      </header>
    </div>
  );
}

export default App;
