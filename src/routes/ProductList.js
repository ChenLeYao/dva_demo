import React from 'react';
import { Table , Button , Popconfirm  } from 'antd';
import PropsType  from "props-type";
const ProductList = ( { onDelete , onCancel ,  products })=>{

     const columns = [
       {
         dataIndex : 'name' ,
         title : 'Name'
       },
       {
         dataIndex : 'Actions',
         render : ( text , record )=>{
           return <Popconfirm
                     title="是否确认删除?"
                     onConfirm={()=>{ onDelete( record.id ) }}
                     onCancel={()=>{ onCancel(record.id) }}
                  >
                      <Button>Delete</Button>
                  </Popconfirm>
         }
       }
     ];

     return (
       <Table dataSource={ products } columns={ columns }></Table>
     )
}

ProductList.PropsType = {
   onDelete : PropsType.func ,
   products : PropsType.array ,
   onCancel : PropsType.func
};

export default ProductList;
