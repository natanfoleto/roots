import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import { signInRequest } from '../../../store/modules/auth/actions';

import { Wrapper, Content, Back } from '../../../styles/Auth/auth';

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);
  
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
              value="natanfoleto@hotmail.com"
            />
            <Input 
              name="password" 
              type="password" 
              placeholder="Sua senha" 
              autoComplete="off" 
              required
            />

            <button type="submit">{ loading ? 'Carregando...' : 'Acessar' }</button>

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
