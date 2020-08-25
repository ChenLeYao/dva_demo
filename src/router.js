import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products.js';
import Order from './routes/Order.js'
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/products" exact component={Products} />
        <Route path="/order" exact component={Order} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
