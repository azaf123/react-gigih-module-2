import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import LoginPage from '../pages/login';
import PrivateRoute from './privateRoute';
import Home from '../pages/home';

function Routers() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <PrivateRoute path="/create-playlist" component={Home} />
      </Switch>
    </Router>
  );
}
export default Routers;
