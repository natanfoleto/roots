import React, { useState, useEffect } from 'react';

import { Container, Products } from './styles';

import Header from '../../components/Home/Header';
import Carousel from '../../components/Home/Carousel';
import Menu from '../../components/Home/Menu';
import Product from '../../components/Home/Product';
import Footer from '../../components/Home/Footer';

import api from '../../services/api';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');

      setProducts(response.data);
      console.log(response.data);
    }

    loadProducts();
  }, []);

  return (
    <Container>
      <Header />
      <Carousel />
      <Menu />
      {/* history.push('/product/form', {data: rowData}); */}
      <Products>
        <ul>
          {products && products.map((product) => (
            <Product
              nome={product.nome}
              valor={product.valor}
              photos={product.photos}
            />
          ))}

        </ul>
      </Products>

      <Footer />
    </Container>
  );
}
