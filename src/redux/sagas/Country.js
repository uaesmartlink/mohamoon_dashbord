import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import {
  fetchCountryFail,
  fetchCountrySuccess,
} from "redux/actions/Country";

import { COUNTRY_FETCH_INIT } from "redux/constants/Country";

import FirebaseService from "services/FirebaseService";

export function* getCountry() {
  yield takeEvery(COUNTRY_FETCH_INIT, function* () {
    try {
      const country = yield call(
        FirebaseService.fetchCollection,
        "Country"
      );
      yield put(fetchCountrySuccess(country));
    } catch (error) {
      yield put(fetchCountryFail(error));
    }
  });
}

export default function* rootSaga() {
  yield all([fork(getCountry)]);
}
