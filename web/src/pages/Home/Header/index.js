import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import { Container, Content, LogIn } from './styles';

function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">ROOTS</Link>
        </nav>

        <Form initialData="" onSubmit="" autoComplete="off">
          <Input name="search" placeholder="O que você procura?" />
        </Form>

        <aside>
          <LogIn>
            <Link to="/login">
              <button>Entrar</button>
            </Link>
          </LogIn>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;