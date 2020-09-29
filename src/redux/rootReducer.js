import {combineReducers} from "redux";
import booksReducer from "./booksReducer";
import cartReducer from "./cartReducer";
import filterReducer from "./filterReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    booksReducer: booksReducer,
    cartReducer: cartReducer,
    filterReducer: filterReducer,
    authReducer: authReducer
});

export default rootReducer;