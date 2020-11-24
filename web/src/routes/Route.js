import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import DefaultLayout from '../pages/_layouts/default';

import { store } from '../store';

export default function RouteWrapper({
  component: Component,
  path,
  isPrivate,
  ...rest
}) {
  const { signed } = store.getState().auth;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate && path === '/login/adm') {
    return <Redirect to="/control" />;
  }

  const Layout = DefaultLayout;

  return <Route {...rest}
    render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />;
}

RouteWrapper.protoType = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

RouteWrapper.defaulProps = {
  isPrivate: false,
};
