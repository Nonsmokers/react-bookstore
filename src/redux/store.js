import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const reducers = combineReducers({
});

let store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)));

window.store = store;

export default store;