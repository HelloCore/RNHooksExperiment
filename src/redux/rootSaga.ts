import { all, fork } from "redux-saga/effects";
import homeSaga from "src/features/home/home.saga";

function* rootSaga() {
  // prettier-ignore
  yield all([
    fork(homeSaga),
  ]);
}

export default rootSaga;
