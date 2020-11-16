import JobFilter from "../job-filters/JobFilter";
import JobInfo from "../job-info/JobInfo";
import JobSkill from "../job-skills/JobSkill";

import "./JobCard.css";

const JobCard = ({logo, companyName, filters, jobRole, jobInfo, skills}) => (
    <div className="job-card">
          <img src={logo} width="90px" alt="company-logo" className="logo" />
          <div className="company">
            <h3 className="company-name">{companyName}</h3>

            {
              filters 
              ?
              filters.map((filter, index) => (
                <JobFilter 
                  key={index} 
                  filter={filter}
                  bgColor= {filter === "NEW!" ? "hsl(180, 29%, 50%)" : "hsl(0, 0%, 0%)"}
                />
              ))
              :
              ""
            }

          </div>
          <div className="job-role">{jobRole}</div>
          <JobInfo jobInfo={jobInfo} />
          <hr/>
          <div className="job-skills">
            {
              skills.map((skill, index) => <JobSkill key={index} skill={skill} />)
            }
          </div>
      </div>
    );

export default JobCard;