import { Badge } from "UI/Badge";
import { Card } from "UI/Card";
import { Stack } from "UI/Stack";
import { useDispatch, useSelector } from "react-redux";
import { clearFilter, removeFilter } from "store/filters/filter-actions";
import { selectAllFilters } from "store/filters/filter-selectors";

const FilterPanel = () => {
    const filterList = useSelector(selectAllFilters);
    const dispatch = useDispatch();

    if (!filterList || filterList.length === 0) return <></>;

    return (
        <Card className="filter-panel">
            <div className="filter-panel-wrapper">
                <Stack>
                    {filterList.map((item) => {
                        return (
                            <Badge
                                key={item}
                                variant="clearable"
                                onClear={() => {
                                    dispatch(removeFilter(item));
                                }}
                            >
                                {item}
                            </Badge>
                        );
                    })}

                    {/* <Badge variant="clearable">Backend</Badge> */}
                    {/* <Badge variant="clearable">React</Badge> */}
                </Stack>

                <button
                    className="link"
                    onClick={() => {
                        dispatch(clearFilter());
                    }}
                >
                    Clear
                </button>
            </div>
        </Card>
    );
};

export { FilterPanel };
