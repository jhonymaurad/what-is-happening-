import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import Header from '../components/Header';

const title = 'What is happening ???';

export function PrivateRoute ({
  isAutheticated,
  component: Component,
  ...rest // get the rest of the props in the variable
}) {
  return (
    <Route
      {...rest} component={(props) => (
        isAutheticated
          ? (<div><Header title={title} /><Component {...props} /></div>)
          : (<Redirect to='/' />)
      )}
    />
  )
};

const mapStateToProps = (state) => ({
  isAutheticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PrivateRoute);
