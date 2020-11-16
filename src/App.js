import './App.css';
import JobCard from './components/job-card/JobCard';
import JOB_DATA from './data/data';


const App = () => {
  const jobData = Object.keys(JOB_DATA).map(data => JOB_DATA[data])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Dev Jobs</h1>
      </header>
      <div className="job-cards">
        {
          jobData.map(({id, companyLogo, ...otherJobData}) => (
            <JobCard
              key={id}
              logo={companyLogo}
              {...otherJobData}
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;

