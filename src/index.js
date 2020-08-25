import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva({
     initialState: {
     products: [
           { name: 'dva', id: 1 },
           { name: 'antd', id: 2 },
           { name: 'noob', id: 3},
           { name: 'single', id: 4 }
        ],
     order :[
       { name: 'hhahah', key: 1 },
       { name: 'hh', key: 2 },
       { name: 'ttt', key: 3},
       { name: 'sinnnngle', key: 4 }
     ]
     }
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
app.model( require('./models/products').default );
app.model( require('./models/order').default);
// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
