import React from 'react';

import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import { Wrapper, Content, Back } from '../../../styles/auth';

export default function SignUp() {
  return (
    <>
      <Wrapper>
        <Content>
          <h1> ROOTS </h1>
          
          <Form>
            <Input 
              name="cpf" 
              type="text" 
              placeholder="CPF" 
              autoComplete="off" 
              required
            />
            <Input 
              name="nome" 
              type="text" 
              placeholder="Nome completo" 
              autoComplete="off" 
              required
            />
            <Input 
              name="data" 
              type="date" 
              placeholder="Data de nascimento" 
              autoComplete="off" 
              required
            />
            <Input 
              name="email" 
              type="email" 
              placeholder="Seu e-mail" 
              autoComplete="off" 
              required
            />
            <Input 
              name="senha" 
              type="password" 
              placeholder="Senha" 
              autoComplete="off" 
              required
            />
            <Input 
              name="confirmaSenha" 
              type="password" 
              placeholder="Confirma sua senha" 
              autoComplete="off" 
              required
            />

            <button type="submit">Cria conta</button>

            <Link to="/login/adm">Já tem conta?</Link>

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
