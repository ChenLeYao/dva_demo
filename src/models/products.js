export default {
   namespace : 'products', //全局state上的key
   state :[] , //state 初始值
   reducers : { // 相当于redux 里的reducer , 接受action , 更新state
      delete : ( state, { payLoad : id })=>{
         return state.filter( item => item.id !== id )
      },
      'cancel'( state , { payLoad : id  }){
         return state.filter( item => item.id > 0 )
      }
   }
}
