import { getType } from "typesafe-actions";
import * as actions from "./detail.actions";
import { DetailAction, DetailState } from "./detail.types";

const initialState: DetailState = {};

export default function(state: DetailState = initialState, action: DetailAction): DetailState {
  switch (action.type) {
    case getType(actions.sampleDetailAction):
      return {
        ...state,
      };

    default:
      return state;
  }
}
