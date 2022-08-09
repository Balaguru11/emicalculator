import combineReducer from "./combineReducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const _store = createStore(combineReducer, {}, applyMiddleware(thunk));

export default _store;
