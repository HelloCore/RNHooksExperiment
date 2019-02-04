import { combineReducers } from "redux";
import homeReducer from "src/features/home/home.reducer";
import navReducer from "./navReducer";

const rootReducer = combineReducers({
  home: homeReducer,
  nav: navReducer,
});

export default rootReducer;
