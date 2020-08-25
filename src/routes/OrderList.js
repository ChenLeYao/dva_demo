import React  from "react";
import { Table , Button , Popconfirm } from 'antd';

const OrderList = ({ onDelete , onCancel , order })=> {
  const columns = [
    {
      dataIndex: 'name',
      title: 'Name'
    },
    {
      dataIndex: 'action',
      render() {
        return <Popconfirm title="是否确认删除"
                           onConfirm={() => {
                             onDelete()
                           }}
                           onCancel={() => {
                             onCancel()
                           }}
        >
          <Button>删除</Button>
        </Popconfirm>
      }
    }
  ];

  return <Table dataSource={order} columns={columns}></Table>

}
export default OrderList;
