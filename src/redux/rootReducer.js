import {combineReducers} from "redux";
import booksReducer from "./booksReducer";
import cartReducer from "./cartReducer";
import filterReducer from "./filterReducer";

const rootReducer = combineReducers({
    booksReducer,
    cartReducer,
    filterReducer,
});

export default rootReducer;