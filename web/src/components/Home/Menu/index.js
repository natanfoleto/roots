import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

function Menu() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">TODAS AS CATEGORIAS</Link>
        </nav>
        <nav>
          <Link to="/">CAMISETAS</Link>
        </nav>
        <nav>
          <Link to="/">TÊNIS</Link>
        </nav>
        <nav>
          <Link to="/">CALÇAS</Link>
        </nav>
        <nav>
          <Link to="/">BERMUDAS</Link>
        </nav>
      </Content>
    </Container>
  );
}

export default Menu;