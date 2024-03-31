export const selectAllPostitions = (state) => state.positions;

export const selectVisiblePositions = (state, filters) => {
    if (filters.length === 0) return state;

    const postFilters = [].concat(state.role, state.level, ...state.languages, ...state.tools);
    return filters.every((filter) => postFilters.includes(filter));
};
