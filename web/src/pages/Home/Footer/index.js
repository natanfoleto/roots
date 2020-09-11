import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

function Footer() {
  return (
    <Container>
      <nav>
        <Link to="/">FOOTER</Link>
      </nav>
    </Container>
  );
}

export default Footer;