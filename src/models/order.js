export default {
   namespace:'order',
   state :[] ,
   reducers : {
      delete : ( state , { payLoad : key } )=> {
           return state.filter( item => item.key > 0 )
      },
      cancel : ( state , { payLoad : key } )=> {
       return state.filter( item => item.key > 0 )
     }
   }
}
