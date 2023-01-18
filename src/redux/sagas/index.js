import { all } from "redux-saga/effects";
import Auth from "./Auth";
import Users from "./Users";
import DoctorCategory from "./DoctorCategory";
import Doctors from "./Doctors";
import WithdrawRequest from "./WithdrawRequestSaga";
import Charge from "./ChargeSaga";
import Transaction from "./TransactionSega";
import Dashboard from "./DashboardSaga";
import Settings from "./SettingsSaga";
//plopImport

export default function* rootSaga(getState) {
  yield all([
    Auth(),
    Users(),
    DoctorCategory(),
    Doctors(),
    WithdrawRequest(),
Charge(),
Transaction(),
Dashboard(),
Settings(),
//plopSaga
  ]);
}
