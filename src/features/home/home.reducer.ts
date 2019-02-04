import { getType } from "typesafe-actions";
import * as actions from "./home.actions";
import { HomeAction, HomeState } from "./home.types";

const initialState: HomeState = {
  title: "Home",
};

export default function(state: HomeState = initialState, action: HomeAction): HomeState {
  switch (action.type) {
    case getType(actions.sampleHomeAction):
      return {
        ...state,
      };

    default:
      return state;
  }
}
