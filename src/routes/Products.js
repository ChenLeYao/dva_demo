import React, {Component} from 'react';
import { connect } from 'dva';
import ProductList from './ProductList';
import Bind from 'lodash-decorators/bind';
// const Products = ( { dispatch , products } )=> {
//   console.log( dispatch , products );
//    function handleDelete( id ){
//      dispatch({
//         type :'/products/delete' ,
//         payload : id
//      });
//      console.log('delete');
//    }
//    function handleCancle(id){
//      dispatch({
//        type :'/products/cancel' ,
//        payload : id
//      });
//      console.log('cancle');
//    }
//    return (
//       <div>
//         <h2>List of Products</h2>
//         <ProductList onDelete={ handleDelete } onCancel={ handleCancle } products={ products }></ProductList>
//       </div>
//    )
// }

// export default connect(({ products })=>({ products}))(Products);
// @connect(({ products})=>({ products }))(Products)

// export default Products;

@connect(({ products})=>({ products }))
class Products extends Component{

   constructor( props ) {
     super(props);
     console.log( props );
   }
   @Bind()
   onhandleDelete( id ){
     this.props.dispatch({
       type :'/products/delete' ,
       payload : id
     });
     console.log('delete');
   }
   @Bind()
   onhandleCancel(id){
    this.props.dispatch({
      type :'/products/cancel' ,
      payload : id
    });
    console.log('cancle');
  }
   render(){
     return (
       <div>
         <h2>List of Products</h2>
         <ProductList onDelete={ this.onhandleDelete }
                      onCancel={ this.onhandleCancel }
                      products={ this.props.products }>
         </ProductList>
       </div>
     )
   }
}

export default Products;
