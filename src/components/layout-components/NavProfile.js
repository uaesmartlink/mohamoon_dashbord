import { Menu, Dropdown, Avatar } from "antd";
import { connect } from "react-redux";
import {
  SettingOutlined,
  QuestionCircleOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
//import Icon from "components/util-components/Icon";
import { signOut } from "redux/actions/Auth";
//import { AUTH_TOKEN } from "../../redux/constants/Auth";
//import {FirebaseService} from "../../services/FirebaseService";

const menuItem = [
  {
    title: "Account Setting",
    icon: SettingOutlined,
    path: "https://halolawyer.netlify.app/",
  },
  {
    title: "Help Center",
    icon: QuestionCircleOutlined,
    path: "https://tatbeeb.app/terms-of-use-for-patients/",
  },
];

//const data =  FirebaseService.fetchDocument("Users",localStorage.getItem(AUTH_TOKEN));
export const NavProfile = ({ signOut }) => {

  const profileImg = "/img/avatars/thumb-16.jpg";
  const profileMenu = (
    <div className="nav-profile nav-dropdown">
      <div className="nav-profile-header">
        <div className="d-flex">
          <Avatar size={45} src={profileImg} />
          <div className="pl-3">
            <h4 className="mb-0">Admin</h4>
            <span className="text-muted">admin</span>
          </div>
        </div>
      </div>
      <div className="nav-profile-body">
        <Menu>
          {/*
          {menuItem.map((el, i) => {
            return (
              <Menu.Item key={i}>
                <a href={el.path}>
                  <Icon type={el.icon} />
                  <span className="font-weight-normal">{el.title}</span>
                </a>
              </Menu.Item>
            );
          })}
        */}
          <Menu.Item key={menuItem.length + 1} onClick={(e) => signOut()}>
            <span>
              <LogoutOutlined />
              <span className="font-weight-normal">Sign Out</span>
            </span>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
  return (
    <Dropdown placement="bottomRight" overlay={profileMenu} trigger={["click"]}>
      <Menu className="d-flex align-item-center" mode="horizontal">
        <Menu.Item key="profile">
          <Avatar src={profileImg} />
        </Menu.Item>
      </Menu>
    </Dropdown>
  );
};

export default connect(null, { signOut })(NavProfile);
