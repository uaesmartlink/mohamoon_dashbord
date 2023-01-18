import React, { useEffect } from "react";
import { getTransactionInit } from "redux/actions/TransactionActions";
import { Card, Table } from "antd";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
const Transaction = () => {
  const { transactionList, loading } = useSelector(
    (state) => ({
      transactionList: state.transaction.data,
      error: state.transaction.error,
      loading: state.transaction.loading,
      deleted: state.transaction.delete,
    }),
    shallowEqual
  );
  // eslint-disable-next-line array-callback-return
  transactionList.map(el => {
    let date = new Date(el.createdAt)
    el.createdAt_newFormate = date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear()+'\n'+dateFormat(date.getHours())+":"+dateFormat(date.getMinutes());
  });

  function dateFormat(el){
    if(el < 10){
      return "0"+el;
    }
    return el;
  }  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransactionInit());
  }, [dispatch]);

  const columns = [
    {
      title: "Date",
      key: "createdAt_newFormate",
      dataIndex: "createdAt_newFormate",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
        title: "User Id",
        dataIndex: "userId",
        key: "userId",
    },
    {
        title: "time slot ID",
        dataIndex: "timeSlotId",
        key: "timeSlotId",
    },
   /*
    {
      title: "Charged",
      dataIndex: "charged",
      key: "charged",
      render : (text) => String(text),
    },
    */
  ];
  return (
    <div>
      {" "}
      <Card>
        <Table
          dataSource={transactionList}
          columns={columns}
          loading={loading}
        />
      </Card>
    </div>
  );
};

export default Transaction;
