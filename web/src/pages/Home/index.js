import React from 'react';

import { Container, Products } from './styles';

import Header from '../../components/Home/Header';
import Carousel from '../../components/Home/Carousel';
import Menu from '../../components/Home/Menu';
import Product from '../../components/Home/Product';
import Footer from '../../components/Home/Footer';

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
