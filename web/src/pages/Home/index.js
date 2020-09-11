import React from 'react';

import { Container, Products } from './styles';

import Header from './Header';
import Carousel from './Carousel';
import Menu from './Menu';
import Product from './Product';
import Footer from './Footer';

export default function Home() {
  return (
    <Container>
      <Header />
      <Carousel />
      <Menu />
      
      <Products>
        <ul>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </ul>
      </Products>

      <Footer />
    </Container>
  );
}
