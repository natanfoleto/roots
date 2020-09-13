import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import DefaultLayout from '../pages/_layouts/default';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const signed = false;

  if (!signed && isPrivate) {
    return <Redirect to="/"/>;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard"/>;
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
