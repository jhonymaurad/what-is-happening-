import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import LoginPage from '../components/LoginPage';
import EditEvent from '../components/EditEvent';
import AddEvent from '../components/AddEvent';
import NotFound from '../components/NotFound';
import EventsDashboardPage from '../components/EventsDashboardPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createBrowserHistory();

function AppRouter () {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <PublicRoute exact path='/' component={LoginPage} />
          <PrivateRoute path='/dashboard' component={EventsDashboardPage} />
          <PrivateRoute path='/create' component={AddEvent} />
          <PrivateRoute path='/edit/:id' component={EditEvent} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter;
