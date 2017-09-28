import React from 'react';

import {Route, Switch, withRouter} from 'react-router-dom';

import Home from '@/page/Home'
import Routte from '@/page/Route'
import CreditCardTwo from '@/page/CreditCard/StepTwo'
import CreditCard from '@/page/CreditCard'
import NotFound from '@/page/NotFound'


// exact 表示严格匹配
// Switch 表示 route 之间是互斥的

export default () => (
  <div className="route_index">

    {/* <Route exact path="/" component={Home}  /> */}
    <Switch>
      <Route exact path="/" component={Home}  />
      <Route exact path="/roat/:id" component={(Routte)} />
      <Route path="/creditCard" component={(CreditCard)} />
      <Route component={NotFound} />
    </Switch>
  </div>
)