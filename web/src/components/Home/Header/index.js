import React from 'react';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import { ContainerHeader, ContentHeader } from './styles';

function Header() {
  const client = useSelector(state => state.client.client);

  return (
    <ContainerHeader>
      <ContentHeader>
        <nav>
          <Link to="/">ROOTS</Link>
        </nav>

        <Form initialData="" onSubmit="" autoComplete="off">
          <Input name="search" placeholder="O que você procura?" />
        </Form>

        {
          client
            ?
            <Link to="/profile/client"><button>{client.nome}</button></Link>
            :
            <Link to="/choose"><button>Entrar</button></Link>
        }

      </ContentHeader>
    </ContainerHeader>
  );
}

export default Header;