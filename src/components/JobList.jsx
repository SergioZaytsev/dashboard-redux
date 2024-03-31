import { useSelector } from "react-redux";
import { JobPosition } from "./JobPosition";
import { selectAllPostitions } from "store/positions/position-selectors";

const JobList = () => {
    const data = useSelector(selectAllPostitions);

    return (
        <div className="job-list">
            {data.map((item) => (
                <JobPosition key={item.id} {...item} />
            ))}
        </div>
    );
};

export { JobList };
