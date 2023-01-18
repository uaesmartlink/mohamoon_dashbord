import { useEffect } from "react";
import { Row, Col } from "antd";
import StatisticWidget from "components/shared-components/StatisticWidget";
import DataDisplayWidget from "components/shared-components/DataDisplayWidget";
import { UserOutlined } from "@ant-design/icons";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import ChartWidget from "components/shared-components/ChartWidget";
import { getUserCountInit , getDoctorCountInit } from "redux/actions/DashboardActions";
const Home = () => {
  const { userCount, doctorCount } = useSelector(
    (state) => ({
      userCount: state.dashboard.userData,
      userError: state.dashboard.userError,
      userLoading: state.dashboard.userLoading,
      userDelete: state.dashboard.userDelete,

      doctorCount: state.dashboard.doctorData,
      doctorError: state.dashboard.doctorError,
      doctorLoading: state.dashboard.doctorLoading,
      doctorDelete: state.dashboard.doctorDelete,

    }),
    shallowEqual
  );


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserCountInit());
    dispatch(getDoctorCountInit());
  }, [dispatch]);
  const visitorChartData = {
    series: [
      {
        name: "Charge",
        data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
      },
      {
        name: "Consultation",
        data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35],
      },
    ],
    categories: [
      "01 Jan",
      "02 Jan",
      "03 Jan",
      "04 Jan",
      "05 Jan",
      "06 Jan",
      "07 Jan",
      "08 Jan",
      "09 Jan",
      "10 Jan",
      "11 Jan",
      "12 Jan",
    ],
  };
  return (
    <div>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={18}>
          <Row gutter={16}>
            <Col xs={24} sm={24} md={24} lg={24} xl={8}>
              <DataDisplayWidget
                icon={<UserOutlined />}
                value={userCount}
                title="User Register"
                color="blue"
                size={"md"}
                avatarSize={50}
                vertical={false}
              />
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={8}>
              <DataDisplayWidget
                icon={<UserOutlined />}
                value={doctorCount}
                title="Doctor Register"
                color="cyan"
                size={"md"}
                avatarSize={50}
                vertical={false}
              />
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={8}>
              <StatisticWidget
                title="Revenue"
                value="$51"
                status={8.8}
                subtitle="Compare to last month (may)"
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={18}>
          <Row gutter={16}>
            <Col span={24}>
              <ChartWidget
                title="Charge Data"
                series={visitorChartData.series}
                xAxis={visitorChartData.categories}
                height={400}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
