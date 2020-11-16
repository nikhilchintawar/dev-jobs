import "./JobInfo.css";

const JobInfo = ({jobInfo}) => (
        <ul className="job-info">
            {
                jobInfo.map((info, index) => <li key={index}>{info}</li>)
            }
        </ul>
    );


export default JobInfo;