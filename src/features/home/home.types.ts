import { ActionType } from "typesafe-actions";
import * as actions from "./home.actions";

export type HomeAction = ActionType<typeof actions>;

export interface HomeState {
  title: string;
}
