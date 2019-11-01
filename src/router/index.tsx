import React from 'react'
import { Route, Switch } from 'react-router';
import { Scene } from 'containers/Scene';

const routes = (
  <div>
    <Switch>
      <Route exact path="/" component={Scene} />
    </Switch>
  </div>
);

export default routes