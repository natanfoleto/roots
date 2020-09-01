import React from 'react';

import { Container } from './styles';

import Header from './Header';
import Carousel from './Carousel';

export default function Home() {
  return (
    <Container>
      <Header />
      <Carousel />
    </Container>
  );
}
