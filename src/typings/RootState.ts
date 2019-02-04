import rootReducer from "src/redux/rootReducer";
import { StateType } from "typesafe-actions";

export type RootState = StateType<typeof rootReducer>;
