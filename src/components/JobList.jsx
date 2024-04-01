import { useDispatch, useSelector } from "react-redux";
import { JobPosition } from "./JobPosition";
import { selectAllPostitions, selectVisiblePositions } from "store/positions/position-selectors";
import { addFilter } from "store/filters/filter-actions";
import { selectAllFilters } from "store/filters/filter-selectors";

const JobList = () => {
    const filterList = useSelector(selectAllFilters);

    const data = useSelector((state) => selectVisiblePositions(state, filterList));
    const dispatch = useDispatch();

    const addToFilter = (filter) => {
        dispatch(addFilter(filter));
    };

    console.log("data=", data);

    return (
        <div className="job-list">
            {data && data.map((item) => <JobPosition key={item.id} {...item} onClick={addToFilter} />)}
        </div>
    );
};

export { JobList };
