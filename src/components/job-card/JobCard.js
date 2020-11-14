import JobFilter from "../job-filters/JobFilter";
import JobInfo from "../job-info/JobInfo";
import JobSkill from "../job-skills/JobSkill";

import "./JobCard.css";
import { ReactComponent as AccountLogo} from "../../assets/account.svg";


const JobCard = () => {
    return (
<div className="job-card">
          <AccountLogo className="logo" />
          <div className="company">
            <h3 className="company-name">Account</h3>
            <JobFilter bgColor="hsl(180, 29%, 50%)" filter="NEW!" />
            <JobFilter bgColor="hsl(0, 0%, 0%)" filter="FEATURED" />
          </div>
          <div className="job-role">Senior Frontend Developer</div>
          <JobInfo />
          <hr/>
          <div className="job-skills">
            <JobSkill skill="Frontend" />
            <JobSkill skill="Senior" />
            <JobSkill skill="HTML" />
            <JobSkill skill="CSS" />
            <JobSkill skill="JavaScript" />
          </div>
      </div>
    );
};

export default JobCard;