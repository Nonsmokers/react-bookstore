import {ADD_BOOK_TO_CART,REMOVE_BOOK_FROM_CART,CLEAR_CART} from '../actions/actionTypes'

let initialState = {
    items: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOOK_TO_CART: {
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        }
        case REMOVE_BOOK_FROM_CART: {
            return {
                ...state,
                items: state.items.filter(o => o.id !== action.payload)
            }
        }
        case CLEAR_CART: {
            return {
                ...state,
                items: []
            }
        }
        default:
            return state;
    }
}
export default cartReducer;