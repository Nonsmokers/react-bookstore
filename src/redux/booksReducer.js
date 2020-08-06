const SET_BOOK = 'SET_BOOK'
const SET_IS_READY = 'SET_IS_READY'

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