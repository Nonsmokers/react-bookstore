import {SET_FILTER, SET_SEARCH_QUERY} from '../actions/actionTypes'

let initial_state = {
    searchQuery: '',
    filterBy: 'all'
}

const filterReducer = (state = initial_state, action) => {
    switch (action.type) {
        case SET_SEARCH_QUERY: {
            return {
                ...state,
                searchQuery: action.payload
            }
        }
        case SET_FILTER: {
            return {
                ...state,
                filterBy: action.payload
            }
        }
        default:
            return state;
    }

}
export default filterReducer;
