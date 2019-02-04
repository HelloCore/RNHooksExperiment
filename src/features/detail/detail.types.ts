import { ActionType } from "typesafe-actions";
import * as actions from "./detail.actions";

export type DetailAction = ActionType<typeof actions>;

export interface DetailState {}
