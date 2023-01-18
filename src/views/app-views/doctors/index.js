import { Card, Table, Space, Button, Tabs, Modal, Tag } from "antd";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import firebase from 'firebase/app';
import {
  //addTopRatedDoctorInit,
  //deleteTopRatedInit,
  fetchDoctorInit,
 // fetchTopRatedDoctorInit,
  deleteDoctorInit,
  setDoctorAccountStatusInit,
} from "redux/actions/Doctor";
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
const Doctors = () => {
  const {
    doctorList,
  //  listTopRatedDoctor,
  //  topRatedLoading,
    loading,
  } = useSelector(
    (state) => ({
      doctorList: state.doctor.data,
   //   listTopRatedDoctor: state.doctor.topRatedDoctor,
    //  topRatedLoading: state.doctor.topRatedLoading,
      error: state.doctor.error,
      loading: state.doctor.loading,
      delete: state.doctor.delete,
    }),
    shallowEqual
  );

  // eslint-disable-next-line array-callback-return
  doctorList.map(el => {
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
    dispatch(fetchDoctorInit());
   // dispatch(fetchTopRatedDoctorInit());
  }, [dispatch]);

  const columns = [
    {
      title: "Date Register",
      key: "createdAt_newFormate",
      dataIndex: "createdAt_newFormate",
      width: "10%",
    },
    {
      title: "Doctor Picture",
      dataIndex: "doctorPicture",
      key: "name",
      render: (_, record) => (
        <Flex>
          <AvatarStatus
            size={30}
            src={record.doctorPicture}
          />
        </Flex>
      ),
    },
    {
      title: "Doctor Name",
      dataIndex: "doctorName",
      key: "doctorName",
    },
    {
      title: "Phone",
      dataIndex: "doctorPhone",
      key: "doctorPhone",
    },
    /*
    {
      title: "Hospital",
      dataIndex: "doctorHospital",
      key: "doctorHospital",
    },
    */
    {
      title: "Category / Specialist",
      dataIndex: ["doctorCategory", "categoryName"],
      key: "doctorHospital",
    },
    {
      title: "Account Status",
      key: "doctorHospital",
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
                ? () => showConfirmDeactivate(record.doctorName, record.id)
                : () => showConfirmActivate(record.doctorName, record.id)
            }
          ></Button>
          {/*
          <Button
            icon={<StarOutlined />}
            shape="circle"
            onClick={() => showConfirmAddTopRated(record.doctorName, record.id)}
          ></Button>
          */}
          <Button
            icon={<DeleteOutlined />}
            shape="circle"
            onClick={() =>
              showConfirmDeleteDoctor(record.doctorName, record.id)
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
  const topRatedDoctorColumns = [
    {
      title: "Doctor Picture",
      dataIndex: "doctorPicture",
      key: "name",
      render: (_, record) => (
        <Flex>
          <AvatarStatus
            size={30}
            src={record.doctorPicture}
          />
        </Flex>
      ),
    },
    {
      title: "Doctor Name",
      dataIndex: "doctorName",
      key: "doctorName",
    },
    {
      title: "Hospital",
      dataIndex: "doctorHospital",
      key: "doctorHospital",
    },
    {
      title: "Category / Specialist",
      dataIndex: ["doctorCategory", "categoryName"],
      key: "doctorHospital",
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
              showConfirmDeleteTopRated(record.doctorName, record.id)
            }
          ></Button>
        </Space>
      ),
    },
  ];
  function showConfirmAddTopRated(doctorName, documentId) {
    confirm({
      title: `Do you want to add ${doctorName} to Top Rated Doctor"`,
      content:
        "if you adding this doctor to the top rated doctor, he will appear on the main page of all users",
      onOk() {
        addTopRated(documentId);
      },
      onCancel() {},
    });
  }

  function showConfirmDeleteTopRated(doctorName, documentId) {
    confirm({
      title: `Remove ${doctorName} from Top Rated Doctor.?"`,
      icon: <ExclamationCircleOutlined />,
      content:
        "if you remove this Doctor from top rated doctor, he will not be shown on Top Rated Doctor page",
      onOk() {
        deleteTopRated(documentId);
      },
      onCancel() {},
    });
  }

  */
  function showConfirmDeleteDoctor(doctorName, documentId) {
    confirm({
      title: `Are you sure you want to delete ${doctorName} account`,

      content:
        "if you delete this doctor's account, this account will be deleted forever",
      onOk() {
        deleteDoctorAccount(documentId);
      },
      onCancel() {},
    });
  }
  function showConfirmDeactivate(doctorName, documentId) {
    confirm({
      title: `Are you sure you want to deactivate ${doctorName} account`,

      content:
        "If you deactivate this doctor's account, this doctor will not be visible to all users, until it is reactivated",
      onOk() {
        deactivateDoctor(documentId);
      },
      onCancel() {},
    });
  }
  function showConfirmActivate(doctorName, documentId) {
    confirm({
      title: `Are you sure you want to Activate ${doctorName} account`,

      content:
        "If you Aeactivate this doctor's account, this doctor  be visible to all users",
      onOk() {
        activateDoctor(documentId);
      },
      onCancel() {},
    });
  }

  function deactivateDoctor(doctorId) {
    dispatch(setDoctorAccountStatusInit(doctorId, "nonactive"));
  }
  function activateDoctor(doctorId) {
    dispatch(setDoctorAccountStatusInit(doctorId, "active"));
  }
  /*
  function deleteTopRated(doctorId) {
    dispatch(deleteTopRatedInit(doctorId));
  }
  function addTopRated(doctorId) {
    dispatch(addTopRatedDoctorInit(doctorId));
  }
  */
  function deleteDoctorAccount(doctorId) {
    dispatch(deleteDoctorInit(doctorId));
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
          <TabPane tab="Doctors" key="1">
            <Table
              dataSource={doctorList}
              columns={columns}
              loading={loading}
            />
          </TabPane>
          {/*
          <TabPane
            tab={
              <span>
                <StarOutlined />
                Top Rated Doctors
              </span>
            }
            key="2"
          >
            <Table
              dataSource={listTopRatedDoctor}
              columns={topRatedDoctorColumns}
              loading={topRatedLoading}
            />
          </TabPane>
          */}
        </Tabs>
      </Card>
    </>
  );
};

export default Doctors;
