/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import React from 'react';
import { RootState } from '../../redux/store';

function PrivateRoute({ component: Component, ...rest }: any) {
  const accessToken = useSelector((state: RootState) => state.token.accessToken);
  return (
    <Route
      {...rest}
      render={(props) => (accessToken ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/',
          }}
        />
      ))}
    />
  );
}
export default PrivateRoute;
