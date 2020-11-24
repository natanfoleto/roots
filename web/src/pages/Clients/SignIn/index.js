import React from 'react';

import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import { useDispatch, useSelector } from 'react-redux';

import { signInRequest } from '../../../store/modules/authClient/actions';

import { Wrapper, Content, Back } from '../../../styles/Auth/auth';

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.authClient.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <Wrapper>
        <Content>
          <h1> ROOTS </h1>

          <Form onSubmit={handleSubmit}>
            <Input
              name="email"
              type="email"
              placeholder="Seu e-mail"
              autoComplete="off"
              required
            />
            <Input
              name="password"
              type="password"
              placeholder="Sua senha"
              autoComplete="off"
              required
            />

            <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>

            <Link to="/register/client">Criar conta gratuita</Link>

            <Back>
              <nav>
                <Link to="/choose">🡨 MUDAR TIPO DE LOGIN </Link>
              </nav>
            </Back>
          </Form>
        </Content>
      </Wrapper>
    </>
  );
}
