import React from 'react';

import { Link } from 'react-router-dom';

import { Wrapper, Content, Back } from './style';

export default function ChooseLogin() {
  return (
    <>
      <Wrapper>
        <h1>SELECIONE O TIPO DE LOGIN</h1>

        <Content>
          <Link to="/login/client">
            <button>Cliente</button>
          </Link> 
          
          <Link to="/login/adm">
            <button>Administrador</button>
          </Link>
        </Content>

        <Back>
          <nav>
            <Link to="/">🡨 VOLTAR PARA A LOJA </Link>
          </nav>
        </Back>
      </Wrapper>
    </>
  );
}
