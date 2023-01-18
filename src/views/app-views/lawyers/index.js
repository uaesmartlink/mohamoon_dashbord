import { Card, Table, Space, Button, Tabs, Modal, Tag } from "antd";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import firebase from 'firebase/app';
import {
  //addTopRatedLawyerInit,
  //deleteTopRatedInit,
  fetchLawyerInit,
 // fetchTopRatedLawyerInit,
  deleteLawyerInit,
  setLawyerAccountStatusInit,
} from "redux/actions/Lawyer";
import Flex from "components/shared-components/Flex";
import AvatarStatus from "components/shared-components/AvatarStatus";
import {
 // StarOutlined,
 // StarFilled,
 // ExclamationCircleOutlined,
  DeleteOutlined,
  StopOutlined,
  CheckOutlined,
  //DownloadOutlined,
  FilePdfOutlined,
} from "@ant-design/icons";
const { TabPane } = Tabs;
const { confirm } = Modal;
const Lawyers = () => {
  const {
    lawyerList,
  //  listTopRatedLawyer,
  //  topRatedLoading,
    loading,
  } = useSelector(
    (state) => ({
      lawyerList: state.lawyer.data,
   //   listTopRatedLawyer: state.lawyer.topRatedLawyer,
    //  topRatedLoading: state.lawyer.topRatedLoading,
      error: state.lawyer.error,
      loading: state.lawyer.loading,
      delete: state.lawyer.delete,
    }),
    shallowEqual
  );

  // eslint-disable-next-line array-callback-return
  lawyerList.map(el => {
    let date = new Date(el.createdAt)
    el.createdAt_newFormate = date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear()+"\n"+dateFormat(date.getHours())+":"+dateFormat(date.getMinutes());
  });

  function dateFormat(el){
    if(el < 10){
      return "0"+el;
    }
    return el;
  }
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLawyerInit());
   // dispatch(fetchTopRatedLawyerInit());
  }, [dispatch]);

  const columns = [
    {
      title: "Date Register",
      key: "createdAt_newFormate",
      dataIndex: "createdAt_newFormate",
      width: "10%",
    },
    {
      title: "Lawyer Picture",
      dataIndex: "lawyerPicture",
      key: "name",
      render: (_, record) => (
        <Flex>
          <AvatarStatus
            size={30}
            src={record.lawyerPicture}
          />
        </Flex>
      ),
    },
    {
      title: "Lawyer Name",
      dataIndex: "lawyerName",
      key: "lawyerName",
    },
    {
      title: "Phone",
      dataIndex: "lawyerPhone",
      key: "lawyerPhone",
    },
    /*
    {
      title: "Hospital",
      dataIndex: "lawyerHospital",
      key: "lawyerHospital",
    },
    */
    {
      title: "Category / Specialist",
      dataIndex: ["lawyerCategory", "categoryName"],
      key: "lawyerHospital",
    },
    {
      title: "Account Status",
      key: "lawyerHospital",
      dataIndex: "accountStatus",
      render: (tag) => (
        <>
          <Tag color={tag === "active" ? "green" : "volcano"} key={tag}>
            {tag.toUpperCase()}
          </Tag>
        </>
      ),
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (text, record) => (
        <Space size="middle">
          <Button
            icon={
              record.accountStatus === "active" ? (
                <StopOutlined />
              ) : (
                <CheckOutlined />
              )
            }
            shape="circle"
            onClick={
              record.accountStatus === "active"
                ? () => showConfirmDeactivate(record.lawyerName, record.id)
                : () => showConfirmActivate(record.lawyerName, record.id)
            }
          ></Button>
          {/*
          <Button
            icon={<StarOutlined />}
            shape="circle"
            onClick={() => showConfirmAddTopRated(record.lawyerName, record.id)}
          ></Button>
          */}
          <Button
            icon={<DeleteOutlined />}
            shape="circle"
            onClick={() =>
              showConfirmDeleteLawyer(record.lawyerName, record.id)
            }
          ></Button>
           <Button
            icon={<FilePdfOutlined />}
            shape="circle"
            onClick={() =>{
             // console.log(record.certificateUrl);
              var myRegexp = new RegExp("uploads%2F(.*\\.pdf)");
              var match = myRegexp.exec(record.certificateUrl);
             

              
              const path = "uploads/"+match[1];
              const files = firebase.storage().ref(path);
              console.log(files);
                 files.getDownloadURL().then((url) => {
                  window.open(url, "_blank")
                });
                
              
              }          
            }
          ></Button>
        </Space>

      ),
    },
  ];
/*
  const topRatedLawyerColumns = [
    {
      title: "Lawyer Picture",
      dataIndex: "lawyerPicture",
      key: "name",
      render: (_, record) => (
        <Flex>
          <AvatarStatus
            size={30}
            src={record.lawyerPicture}
          />
        </Flex>
      ),
    },
    {
      title: "Lawyer Name",
      dataIndex: "lawyerName",
      key: "lawyerName",
    },
    {
      title: "Hospital",
      dataIndex: "lawyerHospital",
      key: "lawyerHospital",
    },
    {
      title: "Category / Specialist",
      dataIndex: ["lawyerCategory", "categoryName"],
      key: "lawyerHospital",
    },

    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (text, record) => (
        <Space size="middle">
          <Button
            icon={<StarFilled />}
            shape="circle"
            onClick={() =>
              showConfirmDeleteTopRated(record.lawyerName, record.id)
            }
          ></Button>
        </Space>
      ),
    },
  ];
  function showConfirmAddTopRated(lawyerName, documentId) {
    confirm({
      title: `Do you want to add ${lawyerName} to Top Rated Lawyer"`,
      content:
        "if you adding this lawyer to the top rated lawyer, he will appear on the main page of all users",
      onOk() {
        addTopRated(documentId);
      },
      onCancel() {},
    });
  }

  function showConfirmDeleteTopRated(lawyerName, documentId) {
    confirm({
      title: `Remove ${lawyerName} from Top Rated Lawyer.?"`,
      icon: <ExclamationCircleOutlined />,
      content:
        "if you remove this Lawyer from top rated lawyer, he will not be shown on Top Rated Lawyer page",
      onOk() {
        deleteTopRated(documentId);
      },
      onCancel() {},
    });
  }

  */
  function showConfirmDeleteLawyer(lawyerName, documentId) {
    confirm({
      title: `Are you sure you want to delete ${lawyerName} account`,

      content:
        "if you delete this lawyer's account, this account will be deleted forever",
      onOk() {
        deleteLawyerAccount(documentId);
      },
      onCancel() {},
    });
  }
  function showConfirmDeactivate(lawyerName, documentId) {
    confirm({
      title: `Are you sure you want to deactivate ${lawyerName} account`,

      content:
        "If you deactivate this lawyer's account, this lawyer will not be visible to all users, until it is reactivated",
      onOk() {
        deactivateLawyer(documentId);
      },
      onCancel() {},
    });
  }
  function showConfirmActivate(lawyerName, documentId) {
    confirm({
      title: `Are you sure you want to Activate ${lawyerName} account`,

      content:
        "If you Aeactivate this lawyer's account, this lawyer  be visible to all users",
      onOk() {
        activateLawyer(documentId);
      },
      onCancel() {},
    });
  }

  function deactivateLawyer(lawyerId) {
    dispatch(setLawyerAccountStatusInit(lawyerId, "nonactive"));
  }
  function activateLawyer(lawyerId) {
    dispatch(setLawyerAccountStatusInit(lawyerId, "active"));
  }
  /*
  function deleteTopRated(lawyerId) {
    dispatch(deleteTopRatedInit(lawyerId));
  }
  function addTopRated(lawyerId) {
    dispatch(addTopRatedLawyerInit(lawyerId));
  }
  */
  function deleteLawyerAccount(lawyerId) {
    dispatch(deleteLawyerInit(lawyerId));
  }

  return (
    <>
      <Card>
        {/* <Flex alignItems="center" justifyContent="between" mobileFlex={false}>
          <Flex className="mb-1" mobileFlex={false}>
            <div className="mr-md-3 mb-3">
              <Input
                placeholder="Search"
                prefix={<SearchOutlined />}
                onChange={(e) => handleSearch(e)}
              />
            </div>
          </Flex>
        </Flex> */}
        <Tabs defaultActiveKey="1">
          <TabPane tab="Lawyers" key="1">
            <Table
              dataSource={lawyerList}
              columns={columns}
              loading={loading}
            />
          </TabPane>
          {/*
          <TabPane
            tab={
              <span>
                <StarOutlined />
                Top Rated Lawyers
              </span>
            }
            key="2"
          >
            <Table
              dataSource={listTopRatedLawyer}
              columns={topRatedLawyerColumns}
              loading={topRatedLoading}
            />
          </TabPane>
          */}
        </Tabs>
      </Card>
    </>
  );
};

export default Lawyers;
