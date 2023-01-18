import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import {
  fetchLawyerCategoryFail,
  fetchLawyerCategorySuccess,
} from "redux/actions/LawyerCategory";

import { LAWYER_CATEGORY_FETCH_INIT } from "redux/constants/LawyerCategory";

import FirebaseService from "services/FirebaseService";

export function* getLawyerCategory() {
  yield takeEvery(LAWYER_CATEGORY_FETCH_INIT, function* () {
    try {
      const lawyerCategory = yield call(
        FirebaseService.fetchCollection,
        "LawyerCategory"
      );
      yield put(fetchLawyerCategorySuccess(lawyerCategory));
    } catch (error) {
      yield put(fetchLawyerCategoryFail(error));
    }
  });
}

export default function* rootSaga() {
  yield all([fork(getLawyerCategory)]);
}
