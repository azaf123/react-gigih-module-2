/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'
import React from 'react'
const PrivateRoute = ({ component: Component, ...rest }) => {
  const accessToken = useSelector(state => state.token.token)
  return (
        <Route
        {...rest}
        render={props =>
          accessToken
            ? (
            <Component {...props} />
              )
            : (
            <Redirect
                to={{
                  pathname: '/',
                  state: { from: props.location }
                }}
            />
              )
        }
        />
  )
}
export default PrivateRoute
