import calcReducer from "./reducers/calcReducer";
import { combineReducers } from "redux";

const combinereducer = combineReducers({
  calc: calcReducer,
});

export default combinereducer;
