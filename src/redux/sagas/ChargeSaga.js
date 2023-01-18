import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import {
  getChargeError,
  getChargeSuccess,
  //plopImportAction
} from "../actions/ChargeActions.js";
import {
  GET_CHARGE_INIT,
  //plopImportConstant
} from "redux/constants/ChargeConstants.js";

import FirebaseService from "services/FirebaseService";

export function* GetCharge() {
  yield takeEvery(GET_CHARGE_INIT, function* () {
    try {
      const data = yield call(FirebaseService.fetchCollection, "Charge", {
        sort: {
          attribute: "createdAt",
          order: "desc",
        },
      });
      let changeTime = data.map((element) => {
        var d = new Date(0);
        d.setUTCSeconds(element.createdAt.seconds);
        return {
          ...element,
          createdAt: `${d}`,
        };
      });

      console.log(
        "🚀 ~ file: ChargeSaga.js ~ line 22 ~ changeTime ~ changeTime",
        changeTime
      );

      yield put(getChargeSuccess(changeTime));
    } catch (error) {
      console.log(
        "🚀 ~ file: ChargeSaga.js ~ line 41 ~ yieldtakeEvery ~ error",
        error.message
      );
      yield put(getChargeError(error));
    }
  });
}
//plopSaga
export default function* rootSaga() {
  yield all([
    fork(GetCharge),
    //plopExport
  ]);
}
