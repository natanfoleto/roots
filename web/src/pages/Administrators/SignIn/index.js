import React from 'react';

import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import { Wrapper, Content, Back } from '../../../styles/auth';

export default function SignIn() {
  return (
    <>
      <Wrapper>
        <Content>
          <h1> ROOTS </h1>
          
          <Form>
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

            <button type="submit">Acessar</button>

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
