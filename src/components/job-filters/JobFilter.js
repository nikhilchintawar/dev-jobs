import "./JobFilter.css";

const JobFilter = ({bgColor, filter}) => {
    return (
        <div className="job-filter" style={{ backgroundColor: `${bgColor}`}}>
            {filter}
        </div>
    );
};

export default JobFilter;