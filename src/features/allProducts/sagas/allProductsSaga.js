import { call, put, takeLatest } from "redux-saga/effects";

import queries from "../../../api/queries";
import mutatios from "../../../api/mutations";

function* getAllProducts(action) {
  console.log("saga action: ", action);
  try {
    const data = yield call(queries.getAllProducts);
    const result = data.data;
    yield put({ type: "GET_ALL_PRODUCTS_SUCCESS", payload: result });
  } catch (error) {
    console.log("saga error: ", error);
    yield put({ type: "GET_ALL_PRODUCTS_FAILURE", error });
  }
}

const saga = function* () {
  yield takeLatest("GET_ALL_PRODUCTS_REQUEST", getAllProducts);
};

export default saga;
