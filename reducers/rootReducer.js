import { combineReducers } from "redux";
import taskReducer from "./TaskReducer";

const rootReducer = combineReducers({
  toDo: taskReducer,
});

export default rootReducer;
