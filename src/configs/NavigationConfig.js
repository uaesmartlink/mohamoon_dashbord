import {
  HomeOutlined,
  UserOutlined,
  DollarCircleOutlined,
  SwapOutlined,
  SettingOutlined,
  GlobalOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { APP_PREFIX_PATH } from "configs/AppConfig";
const dashBoardNavTree = [
  {
    key: "home",
    path: `${APP_PREFIX_PATH}/home`,
    title: "home",
    icon: HomeOutlined,
    breadcrumb: false,
    submenu: [],
  },
];
const usersNavTree = [
  {
    key: "users",
    path: `${APP_PREFIX_PATH}/users`,
    title: "Users",
    icon: UserOutlined,
    breadcrumb: false,
    submenu: [],
  },
];
const LawyersNavTree = [
  {
    key: "lawyers",
    path: `${APP_PREFIX_PATH}/lawyers`,
    title: "Lawyers",
    icon: UserOutlined,
    breadcrumb: false,
    submenu: [],
  },
];
const LawyerCategoryNavTree = [
  {
    key: "lawyer-category",
    path: `${APP_PREFIX_PATH}/lawyer-category`,
    title: "Lawyer Category",
    icon: AppstoreOutlined,
    breadcrumb: false,
    submenu: [],
  },
];
const CountryNavTree = [
  {
    key: "country",
    path: `${APP_PREFIX_PATH}/country`,
    title: "Country",
    icon: GlobalOutlined,
    breadcrumb: false,
    submenu: [],
  },
];

const WithdrawNavTree = [
  {
    key: "withdraw",
    path: `${APP_PREFIX_PATH}/withdra-request`,
    title: "Withdraw Request",
    icon: DollarCircleOutlined,
    breadcrumb: false,
    submenu: [],
  },
];
const ChargeNavTree = [
  {
    key: "charge",
    path: `${APP_PREFIX_PATH}/charge`,
    title: "Charges",
    icon: SwapOutlined,
    breadcrumb: false,
    submenu: [],
  },
];

const TransactionNavTree = [
  {
    key: "transaction",
    path: `${APP_PREFIX_PATH}/transaction`,
    title: "Transactions",
    icon: SwapOutlined,
    breadcrumb: false,
    submenu: [],
  },
];

const SettingsNavTree = [
  {
    key: "settings",
    path: `${APP_PREFIX_PATH}/settings`,
    title: "Settings",
    icon: SettingOutlined,
    breadcrumb: false,
    submenu: [],
  },
];
//NavigationConst

const navigationConfig = [
  ...dashBoardNavTree,
  ...usersNavTree,
  ...LawyersNavTree,
  ...LawyerCategoryNavTree,
  ...CountryNavTree,
  ...WithdrawNavTree,
  ...ChargeNavTree,
  ...TransactionNavTree,
  ...SettingsNavTree,
  //NavigationConfig
];

export default navigationConfig;
