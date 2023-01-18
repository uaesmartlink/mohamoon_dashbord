import React, { useEffect } from "react";
import { getChargeInit } from "redux/actions/ChargeActions";
import { Card, Table } from "antd";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
const Charge = () => {
  const { chargeList, loading } = useSelector(
    (state) => ({
      chargeList: state.charge.data,
      error: state.charge.error,
      loading: state.charge.loading,
      deleted: state.charge.delete,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChargeInit());
  }, [dispatch]);


  // eslint-disable-next-line array-callback-return
  chargeList.map(el => {
    let date = new Date(el.createdAt)
    el.createdAt_newFormate = date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear()+'\n'+dateFormat(date.getHours())+":"+dateFormat(date.getMinutes());
  });

  function dateFormat(el){
    if(el < 10){
      return "0"+el;
    }
    return el;
  }
  

  const columns = [
    {
      title: "Date",
      key: "createdAt",
      dataIndex: "createdAt",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Currency",
      dataIndex: "currency",
      key: "currency",
    },
    /*
    {
      title: "Charged",
      dataIndex: "charged",
      key: "charged",
      render : (text) => String(text),
    },
    */
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "chargeId",
      dataIndex: "charge_id",
      key: "charge_id",
    },
    // {
    //   title: "Link Receipt",
    //   key: "linkReceipt",
    //   dataIndex:"linkReceipt",
    //   render: (text, record) => (
    //     <>
    //       {
    //         <a href={record.linkReceipt} target="_blank" rel="noreferrer">
    //           Link Receipt
    //         </a>
    //       }
    //     </>
    //   ),
    // },
    // {
    //   title: "Stripe Payment ID",
    //   dataIndex: "stripePaymentId",
    //   key: "stripePaymentId",
    // },
    {
      title: "User Id",
      dataIndex: "userId",
      key: "userId",
    },
  ];
  return (
    <div>
      {" "}
      <Card>
        <Table
          scroll={{ x: true }}
          dataSource={chargeList}
          columns={columns}
          loading={loading}
        />
      </Card>
    </div>
  );
};

export default Charge;
