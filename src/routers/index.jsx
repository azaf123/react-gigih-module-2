import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoginPage from '../pages/login'
import PrivateRoute from './privateRoute'
import Home from '../pages/home'
import React from 'react'
const Routers = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
            <LoginPage />
        </Route>
        <PrivateRoute path="/create-playlist" component={Home}>
        </PrivateRoute>
      </Switch>
    </Router>
  )
}
export default Routers
