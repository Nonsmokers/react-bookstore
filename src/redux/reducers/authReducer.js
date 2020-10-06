import {AUTH_SUCCESS,AUTH_LOGOUT} from "../actions/actionTypes";

let initialState = {
    token: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_SUCCESS :
            return {
                ...state, token: action.token
            }
            case AUTH_LOGOUT :
            return {
                ...state, token: null
            }
        default:
            return state;
    }
}

export default authReducer;