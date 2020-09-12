import {ADD_BOOK_TO_CART} from '../actions/actionTypes'
import {REMOVE_BOOK_FROM_CART} from '../actions/actionTypes'

let initialState = {
    items: [],
}

const cartReducer = (state = initialState, action) => {
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
                items: state.items.filter(i => i.id !== action.payload)
            }
        }
        default:
            return state;
    }
}
export default cartReducer;