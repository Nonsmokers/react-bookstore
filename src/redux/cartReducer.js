import {ADD_BOOK_TO_CART} from '../actions/actionTypes'
import {REMOVE_BOOK_FROM_CART} from '../actions/actionTypes'

let initial_state = {
    items: []
}

const cartReducer = (state = initial_state, action) => {
    switch (action.type) {
        case ADD_BOOK_TO_CART: {
            return {
                ...state,
                items: [
                    ...state.items,
                    action.payload
                ]
            }
        }
        case REMOVE_BOOK_FROM_CART: {
            return {
                ...state,
                items: state.items.filter(i => i.id !== action.payload.id)
            }
        }
        default:
            return state;
    }
}
export default cartReducer;