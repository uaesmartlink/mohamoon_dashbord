import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import {
  fetchLawyerFail,
  fetchLawyerSuccess,
  fetchTopRatedLawyerSuccess,
  deleteTopRatedSuccess,
  deleteTopRatedError,
  addTopRatedLawyerSuccess,
  addTopRatedLawyerError,
  deleteLawyerSuccess,
  setLawyerAccountStatusSuccess,
  setLawyerAccountStatusError,
  //plopImportAction
} from "../actions/Lawyer";
import {
  LAWYER_FETCH_INIT,
  FETCH_TOP_RATED_LAWYER_INIT,
  DELETE_TOP_RATED_INIT,
  ADD_TOP_RATED_LAWYER_INIT,
  DELETE_LAWYER_INIT,
  SET_LAWYER_ACCOUNT_STATUS_INIT,
  //plopImportConstant
} from "redux/constants/Lawyer";

import FirebaseService from "services/FirebaseService";

export function* getLawyers() {
  yield takeEvery(LAWYER_FETCH_INIT, function* () {
    try {
      const lawyers = yield call(FirebaseService.fetchCollection, "Lawyers", {
        sort: {
          attribute: "createdAt",
          order: "desc",
        },
      });
      console.log(lawyers);
      let changeTime = lawyers.map((element) => {
        var d = new Date(0);
        d.setUTCSeconds(element.createdAt.seconds);
        return {
          ...element,
          createdAt: `${d}`,
        };
      });
      yield put(fetchLawyerSuccess(changeTime));
    } catch (error) {
      console.log(
        "🚀 ~ file: Lawyers.js ~ line 37 ~ yieldtakeEvery ~ error",
        error
      );
      yield put(fetchLawyerFail(error));
    }
  });
}

export function* getTopRatedLawyer() {
  yield takeEvery(FETCH_TOP_RATED_LAWYER_INIT, function* () {
    try {
      const listIdTopRatedLawyer = yield call(
        FirebaseService.fetchCollection,
        "TopRatedLawyer"
      );

      let convertTopRatedId = listIdTopRatedLawyer.map((item) =>
        item["lawyerId"].replace(/\s/g, "")
      );
      console.log(
        "🚀 ~ file: Lawyers.js ~ line 41 ~ yieldtakeEvery ~ convertTopRatedId",
        convertTopRatedId
      );
      if (convertTopRatedId.length > 10) {
        convertTopRatedId.length = 10;
      }

      const listTopRated = yield call(
        FirebaseService.fetchCollection,
        "Lawyers",
        {
          queries: [
            {
              attribute: "uid",
              operator: "in",
              value: convertTopRatedId,
            },
          ],
        }
      );
      console.log(
        "🚀 ~ file: Lawyers.js ~ line 50 ~ yieldtakeEvery ~ listTopRated",
        listTopRated
      );
      yield put(fetchTopRatedLawyerSuccess(listTopRated));
    } catch (error) {}
  });
}
export function* deleteTopRated() {
  yield takeEvery(DELETE_TOP_RATED_INIT, function* (action) {
    try {
      yield call(FirebaseService.removeTopRatedLawyer, action.lawyerId);
      yield put(deleteTopRatedSuccess(action.lawyerId));
    } catch (error) {
      yield put(deleteTopRatedError(error.message));
    }
  });
}

export function* addTopRatedLawyer() {
  yield takeEvery(ADD_TOP_RATED_LAWYER_INIT, function* (action) {
    try {
      yield call(FirebaseService.addTopRatedLawyer, action.lawyerId);
      yield put(addTopRatedLawyerSuccess(action.lawyerId));
    } catch (error) {
      console.log(
        "🚀 ~ file: Lawyers.js ~ line 91 ~ yieldtakeEvery ~ error",
        error
      );

      yield put(addTopRatedLawyerError(error.message));
    }
  });
}
export function* deleteLawyer() {
  yield takeEvery(DELETE_LAWYER_INIT, function* (action) {
    try {
      console.log(
        "🚀 ~ file: Lawyers.js ~ line 108 ~ yieldtakeEvery ~ action",
        action
      );

      yield call(FirebaseService.deleteLawyerAccount, action.lawyerId);
      yield put(deleteLawyerSuccess(action.lawyerId));
    } catch (error) {
      console.log(
        "🚀 ~ file: Lawyers.js ~ line 117 ~ yieldtakeEvery ~ error",
        error
      );
      yield put(addTopRatedLawyerError(error.message));
    }
  });
}
export function* setLawyerAccountStatus() {
  yield takeEvery(SET_LAWYER_ACCOUNT_STATUS_INIT, function* (action) {
    try {
      yield call(
        FirebaseService.setLawyerAccountStatus,
        action.lawyerId,
        action.status
      );
      yield put(setLawyerAccountStatusSuccess(action.lawyerId, action.status));
    } catch (error) {
      yield put(setLawyerAccountStatusError(error));
    }
  });
}
//plopSaga

export default function* rootSaga() {
  yield all([
    fork(getLawyers),
    fork(getTopRatedLawyer),
    fork(deleteTopRated),
    fork(addTopRatedLawyer),
    fork(deleteLawyer),
    fork(setLawyerAccountStatus),
    //plopExport
  ]);
}
