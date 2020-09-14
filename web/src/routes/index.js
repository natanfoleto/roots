import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '../pages/Home';

import SignUpAdm from '../pages/Administrators/SignUp';
import SignInAdm from '../pages/Administrators/SignIn';

import SignUpClient from '../pages/Clients/SignUp';
import SignInClient from '../pages/Clients/SignIn';

import ChooseLogin from '../pages/ChooseLogin';

import Control from '../pages/Administrators/Control';
import Clients from '../pages/Administrators/Control/Clients';
import Categories from '../pages/Administrators/Control/Categories';
import Products from '../pages/Administrators/Control/Products';
import Providers from '../pages/Administrators/Control/Providers';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />

      <Route path="/register/client" component={SignUpClient} />
      <Route path="/login/client" component={SignInClient} />

      <Route path="/register/adm" component={SignUpAdm} />
      <Route path="/login/adm" component={SignInAdm} />

      <Route path="/choose" component={ChooseLogin} />

      <Route path="/control" component={Control} />
      <Route path="/clients" component={Clients} />
      <Route path="/categories" component={Categories} />
      <Route path="/products" component={Products} />
      <Route path="/providers" component={Providers} />

      {/* <Route path="/dashboard" component={Page} isPrivate /> */}

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}