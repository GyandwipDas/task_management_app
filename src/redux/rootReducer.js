import { combineReducers } from "redux";
// import loginReducer from "./login/loginReducers";
// import registerReducer from "./registration/regReducers";
// import taskReducer from "./tasks/taskReducers";
import userReducer from "./user/userReducers";

const rootReducer = combineReducers({
  user: userReducer,
  // task: taskReducer,
});

export default rootReducer;
