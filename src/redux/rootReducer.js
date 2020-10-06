import {combineReducers} from "redux";
import booksReducer from "./reducers/booksReducer";
import cartReducer from "./reducers/cartReducer";
import filterReducer from "./reducers/filterReducer";
import authReducer from "./reducers/authReducer";

const rootReducer = combineReducers({
    booksReducer: booksReducer,
    cartReducer: cartReducer,
    filterReducer: filterReducer,
    authReducer: authReducer
});

export default rootReducer;