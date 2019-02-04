import { combineReducers } from "redux";
import detailReducer from "src/features/detail/detail.reducer";
import homeReducer from "src/features/home/home.reducer";
import navReducer from "./navReducer";

const rootReducer = combineReducers({
  detail: detailReducer,
  home: homeReducer,
  nav: navReducer,
});

export default rootReducer;
