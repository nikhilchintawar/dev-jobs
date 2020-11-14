import './App.css';
import JobCard from './components/job-card/JobCard';


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dev Jobs</h1>
      </header>
      <JobCard />
    </div>
  );
}

export default App;

