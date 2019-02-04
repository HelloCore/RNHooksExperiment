import { take } from "redux-saga/effects";
import { getType } from "typesafe-actions";
import * as actions from "./detail.actions";

function* detailSaga() {
  while (true) {
    yield take(getType(actions.sampleDetailAction));
  }
}

export default detailSaga;
