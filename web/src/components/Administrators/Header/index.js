import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';

function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <header>
            <Link to="/control">ROOTS</Link>
          </header>
    
          <Link to="/clients">CLIENTES</Link>
          <Link to="/categories">CATEGORIAS</Link>
          <Link to="/products">PRODUTOS</Link>
          <Link to="/providers">FORNECEDORES</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Natan Foleto</strong>
              <Link to="/profile/adm">Meu perfil</Link>
            </div>
          </Profile>
        </aside>

      </Content>
    </Container>
  );
}

export default Header;