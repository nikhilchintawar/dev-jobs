import './App.css';
import { ReactComponent as AccountLogo} from "./assets/account.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dev Jobs</h1>
      </header>
      <div className="job-card">
          <AccountLogo />
          <div className="company">
            <h3 className="company-name">Account</h3>
            <div className="job-freshness">NEW!</div>
            <div className="job-featured">FEATURED</div>
          </div>
          <div className="job-role">Senior Frontend Developer</div>
          <div className="job-info">
            <span className="day-ago">1d ago</span>
            <span className="job-type">Full Time</span>
            <span className="job-location">INDIA only</span>
          </div>
          <div className="job-skills">
            <span>Frontend</span>
            <span>Senior</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>
      </div>
    </div>
  );
}

export default App;

