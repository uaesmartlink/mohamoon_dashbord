import { Card, Table, Space, Button, Modal, message } from "antd";
import { useEffect } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { fetchCountryInit } from "redux/actions/Country";
import Flex from "components/shared-components/Flex";

import AvatarStatus from "components/shared-components/AvatarStatus";
import { Link, useHistory } from "react-router-dom";
import {
  DeleteOutlined,
  ExclamationCircleOutlined,
  EditOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import FirebaseService from "services/FirebaseService";
const { confirm } = Modal;
const Country = () => {
  const {
     countryList,
     loading 
    } = useSelector(
    (state) => ({
      countryList: state.country.data,
      error: state.country.error,
      loading: state.country.loading,
      delete: state.country.delete,
    }),
    shallowEqual
  );
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountryInit());
  }, [dispatch]);

  const columns = [
    {
      title: "Country Icon",
      dataIndex: "iconUrl",
      key: "name",
      render: (_, record) => (
        <Flex>
          <AvatarStatus
            size={50}
            src={record.iconUrl}
          />
        </Flex>
      ),
    },
    {
      title: "Country",
      dataIndex: "countryName",
      key: "countryName",
    },
    {
      title: "الدولة",
      dataIndex: "countryTranslation",
      key: "countryTranslation",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (text, record) => (
        <Space size="middle">
          <Button
            icon={<EditOutlined />}
            shape="circle"
            onClick={() =>
              history.push({
                pathname:
                  "new-country/" +
                  record.id +
                  "/" +
                  record.countryName +
                  "/" +
                  record.countryTranslation
                 
              })
            }
          ></Button>
          <Button
            onClick={() => showPromiseConfirm(record.countryName, record.id)}
            icon={<DeleteOutlined />}
            shape="circle"
          />
        </Space>
      ),
    },
  ];




  function showPromiseConfirm(country, documentId) {
    confirm({
      title: `Do you want to delete ${country} country.?"`,
      icon: <ExclamationCircleOutlined />,
      content:
        "if you delete this country, the Country who has selected this country may not be found in the country list",
      onOk() {
        deleteCountry(documentId);
      },
      onCancel() {},
    });
  }

  const deleteCountry = async (id) => {
    try {
      await FirebaseService.removeCountry(id);
      message.success("success deleted country");
      dispatch(fetchCountryInit());
    } catch (error) {
      message.error(error.message);
    }
  };


  
  return (
    <Card
      title="Country"
      extra={
        <Space>
          <Button icon={<PlusOutlined />}>
            <Link to={"new-country"}>Add Country</Link>
          </Button>
        </Space>
      }
      type="inner"
    >
      <Table
        pagination={false}
        columns={columns}
        dataSource={countryList}
        rowKey="id"
        loading={loading}
      />
    </Card>
  );
};

export default Country;
