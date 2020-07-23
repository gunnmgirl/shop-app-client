import { all, fork } from "redux-saga/effects";

import sagas from "../features/allProducts/sagas/allProductsSaga";

export default function* rootSaga() {
  yield all([fork(sagas)]);
}
