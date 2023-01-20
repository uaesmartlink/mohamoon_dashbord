import { Card, Table, Space, Button, Modal, message } from "antd";
import { useEffect } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { fetchLawyerCategoryInit } from "redux/actions/LawyerCategory";
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
const LawyerCategory = () => {
  const {
     lawyerCategoryList,
     loading 
    } = useSelector(
    (state) => ({
      lawyerCategoryList: state.lawyerCategory.data,
      error: state.lawyerCategory.error,
      loading: state.lawyerCategory.loading,
      delete: state.lawyerCategory.delete,
    }),
    shallowEqual
  );
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLawyerCategoryInit());
  }, [dispatch]);

  const columns = [
    {
      title: "Category Icon",
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
      title: "Category Name",
      dataIndex: "categoryName",
      key: "categoryName",
    },
    {
      title: "الاختصاص",
      dataIndex: "categoryTranslation",
      key: "categoryTranslation",
    },
    {
      title: "Category Description",
      dataIndex: "categoryDescription",
      key: "categoryDescription",
    },
    {
      title: "الوصف",
      dataIndex: "categoryDescriptionAr",
      key: "categoryTDescriptionAr",
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
                  "new-lawyer-category/" +
                  record.id +
                  "/" +
                  record.categoryName +
                  "/" +
                  record.categoryTranslation +
                  "/" +  
                  record.categoryDescription +
                  "/" +
                  record.categoryDescriptionAr
              })
            }
          ></Button>
          <Button
            onClick={() => showPromiseConfirm(record.categoryName, record.id)}
            icon={<DeleteOutlined />}
            shape="circle"
          />
        </Space>
      ),
    },
  ];




  function showPromiseConfirm(categoryName, documentId) {
    confirm({
      title: `Do you want to delete ${categoryName} category.?"`,
      icon: <ExclamationCircleOutlined />,
      content:
        "if you delete this category, the lawyer who has selected this category may not be found in the category list",
      onOk() {
        deleteLawyerCategory(documentId);
      },
      onCancel() {},
    });
  }

  const deleteLawyerCategory = async (id) => {
    try {
      await FirebaseService.removeLawyerCategory(id);
      message.success("success deleted lawyer category");
      dispatch(fetchLawyerCategoryInit());
    } catch (error) {
      message.error(error.message);
    }
  };


  
  return (
    <Card
      title="Lawyer Category"
      extra={
        <Space>
          <Button icon={<PlusOutlined />}>
            <Link to={"new-lawyer-category"}>Add Lawyer Category</Link>
          </Button>
        </Space>
      }
      type="inner"
    >
      <Table
        pagination={false}
        columns={columns}
        dataSource={lawyerCategoryList}
        rowKey="id"
        loading={loading}
      />
    </Card>
  );
};

export default LawyerCategory;
