import { combineReducers } from "redux";
import { reducer } from "./reducer";
import { authReducer } from "./authReducer";
export const rootReducer = combineReducers({
  reducer,
  authReducer,
});
