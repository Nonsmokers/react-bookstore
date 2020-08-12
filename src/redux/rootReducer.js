import {combineReducers} from "redux";
import booksReducer from "./booksReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
    booksReducer,
    cartReducer
});

export default rootReducer;