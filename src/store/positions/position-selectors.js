export const selectAllPostitions = (state) => state.positions;

export const selectVisiblePositions = (state, filters = []) => {
    if (filters.length === 0) {
        return state.positions;
    }

    return state.positions.filter((pos) => {
        const postFilters = [].concat(pos.role, pos.level, ...pos.languages, ...pos.tools);
        return filters.every((filter) => postFilters.includes(filter));
    });
};
