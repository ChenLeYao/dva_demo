import React from 'react';
import { connect } from 'dva';
import OrderList  from "./OrderList";
const Order =( props )=>{
  const { dispatch , order } = props;
  console.log( props );
    function onHandleDelete( key ){
        dispatch({
           type : 'order/delete' ,
           payload : key
        });
        console.log('delete');
    };
    function onHandleCancel ( key ){
       dispatch({
         type :'order/cancel' ,
         payload : key
       });
       console.log('cancel');
    };
    return  (
       <div>
         <h3>Order of Global</h3>
         <OrderList
             onDelete={onHandleDelete}
             onCancel={onHandleCancel}
             order={ order }>
         </OrderList>
       </div>
    )
}

export default connect(({ order })=>({ order }))(Order);
