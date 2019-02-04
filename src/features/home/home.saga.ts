import { take } from "redux-saga/effects";
import { getType } from "typesafe-actions";
import * as actions from "./home.actions";

function* homeSaga() {
  while (true) {
    yield take(getType(actions.sampleHomeAction));
  }
}

export default homeSaga;
