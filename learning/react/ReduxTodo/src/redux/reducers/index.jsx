import themeReducer from "./themeReducer";
import todoReducer from "./todoReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todos: todoReducer,
  theme: themeReducer,
});

export default rootReducer;
