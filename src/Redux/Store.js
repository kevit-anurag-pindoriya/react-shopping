import { createStore } from "redux";
import Rootreducer from "./Rootreducer";
import { Reducer } from "./Reducer";
const store = createStore(Reducer);
export default store;