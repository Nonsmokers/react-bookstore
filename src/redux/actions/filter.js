export const setFilter = filter =>({
    type: 'SET_FILTER',
    payload: filter
});

export const setSearchQuery = value =>({
    type: 'SET_SEARCH_QUERY',
    payload: value
});