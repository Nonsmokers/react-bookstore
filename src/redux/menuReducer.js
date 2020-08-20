import {SET_BOOK} from '../actions/actionTypes'
import {SET_IS_READY} from '../actions/actionTypes'

let initial_state = {
    isReady: false,
    items: null,
}

const booksReducer = (state = initial_state, action) => {
    switch (action.type) {
        case SET_BOOK: {
            return {
                ...state,
                items: action.payload,
                isReady: true
            }
        }
        case SET_IS_READY: {
            return {
                ...state,
                isReady: action.payload
            }
        }
        default:
            return state;
    }
}
export default booksReducer;