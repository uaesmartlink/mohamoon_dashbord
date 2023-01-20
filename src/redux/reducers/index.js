import { combineReducers } from "redux";
import Auth from "./Auth";
import Theme from "./Theme";
import Users from "./Users";
import LawyerCategory from "./LawyerCategory";
import Lawyer from "./Lawyer";
import Country from "./CountryReducer";
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
  lawyerCategory: LawyerCategory,
  lawyer: Lawyer,
  country:Country,
  withdrawRequest:WithdrawRequest,
  charge:Charge,
  transaction:Transaction,
  dashboard:Dashboard,
  settings:Settings,
  //plopReducer
});

export default reducers;
