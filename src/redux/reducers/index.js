import { combineReducers } from "redux";
import Auth from "./Auth";
import Theme from "./Theme";
import Users from "./Users";
import DoctorCategory from "./DoctorCategory";
import Doctor from "./Doctor";
import WithdrawRequest from "./WithdrawRequestReducer";
import Charge from "./ChargeReducer";
import Transaction from "./TransactionReducer";
import Dashboard from "./DashboardReducer";
import Settings from "./SettingsReducer";
//plopImport

const reducers = combineReducers({
  theme: Theme,
  auth: Auth,
  users: Users,
  doctorCategory: DoctorCategory,
  doctor: Doctor,
  withdrawRequest:WithdrawRequest,
charge:Charge,
transaction:Transaction,
dashboard:Dashboard,
settings:Settings,
//plopReducer
});

export default reducers;
