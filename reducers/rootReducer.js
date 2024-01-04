import { combineReducers } from "redux";
import taskReducer from "./TaskReducer";
import optionsReducer from "./optionsReducer";

const rootReducer = combineReducers({
  toDo: taskReducer,
  options: optionsReducer,
});

export default rootReducer;
