import CounterReducer from "./CounterReducerRedux";
import { createStore } from "redux";

const store = createStore(CounterReducer);
export default store;
