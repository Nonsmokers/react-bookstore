const SET_BOOK = 'SET_BOOK'

let initial_state = {
    books: [],
}

const books_reducer = (state = initial_state, action) => {
    switch (action.type) {
        case SET_BOOK: {
            return {
                ...state,
            }
        }
        default:
            return state;
    }
}