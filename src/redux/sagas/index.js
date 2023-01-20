import { all } from "redux-saga/effects";
import Auth from "./Auth";
import Users from "./Users";
import LawyerCategory from "./LawyerCategory";
import Lawyers from "./Lawyers";
import WithdrawRequest from "./WithdrawRequestSaga";
import Charge from "./ChargeSaga";
import Transaction from "./TransactionSega";
import Dashboard from "./DashboardSaga";
import Settings from "./SettingsSaga";
import Country from "./Country";
//plopImport

export default function* rootSaga(getState) {
  yield all([
    Auth(),
    Users(),
    LawyerCategory(),
    Lawyers(),
    Country(),
    WithdrawRequest(),
    Charge(),
    Transaction(),
    Dashboard(),
    Settings(),
    //plopSaga
  ]);
}
