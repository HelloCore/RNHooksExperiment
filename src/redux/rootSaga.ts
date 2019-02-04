import { all, fork } from "redux-saga/effects";
import detailSaga from "src/features/detail/detail.saga";
import homeSaga from "src/features/home/home.saga";

function* rootSaga() {
  // prettier-ignore
  yield all([
    fork(detailSaga),
    fork(homeSaga),
  ]);
}

export default rootSaga;
