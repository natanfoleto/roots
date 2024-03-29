import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';

function Header() {
  const profile = useSelector(state => state.user.profile);

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

        <div className="site">
          <Link to="/">Ir para o site</Link>
        </div>

        <aside>
          <Profile>
            <div>
              <strong>{profile.nome}</strong>
              <Link to="/profile/adm">Meu perfil</Link>
            </div>
          </Profile>
        </aside>

      </Content>
    </Container>
  );
}

export default Header;