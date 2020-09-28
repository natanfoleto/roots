import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '../pages/Home';
import ChooseLogin from '../pages/ChooseLogin';

import SignUpClient from '../pages/Clients/SignUp';
import SignInClient from '../pages/Clients/SignIn';

import SignUpAdm from '../pages/Administrators/SignUp';
import SignInAdm from '../pages/Administrators/SignIn';
import ProfileAdm from '../pages/Administrators/Profile';
import Control from '../pages/Administrators/Control';
import Clients from '../pages/Administrators/Control/Clients';
import Categories from '../pages/Administrators/Control/Categories';
import Products from '../pages/Administrators/Control/Products';
import ProductsForm from '../pages/Administrators/Control/Products/Form';
import Providers from '../pages/Administrators/Control/Providers';

export default function Routes() {
  return (
    <Switch>
      {/* Rotas Default */}
      <Route path="/" exact component={Home} />
      <Route path="/choose" component={ChooseLogin} />

      {/* Rotas Clients */}
      <Route path="/register/client" component={SignUpClient} />
      <Route path="/login/client" component={SignInClient} />

      {/* Rotas ADM */}
      <Route path="/login/adm" component={SignInAdm} />
      <Route path="/register/adm" component={SignUpAdm} isPrivate />

      <Route path="/profile/adm" component={ProfileAdm} isPrivate />

      <Route path="/control" component={Control} isPrivate />

      <Route path="/clients" component={Clients} isPrivate />

      <Route path="/categories" component={Categories} isPrivate />

      <Route path="/products" component={Products} isPrivate />
      <Route path="/product/form" component={ProductsForm} isPrivate />

      <Route path="/providers" component={Providers} isPrivate />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}