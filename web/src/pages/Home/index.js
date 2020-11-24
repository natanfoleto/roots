import React, { useState, useEffect } from 'react';

import { Container, Products, ContainerHeader, ContentHeader } from './styles';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

//import Header from '../../components/Home/Header';
import Carousel from '../../components/Home/Carousel';
import Menu from '../../components/Home/Menu';
import Product from '../../components/Home/Product';
import Footer from '../../components/Home/Footer';

import api from '../../services/api';

export default function Home() {
  const client = useSelector(state => state.client.client);
  const [products, setProducts] = useState([]);
  const [productsCarousel, setProductsCarousel] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');

      setProducts(response.data);
      setProductsCarousel(response.data);
    }

    loadProducts();
  }, []);

  async function searchProduct(data) {
    const product = data.search;

    const response = await api.post('/search/products', { product });

    setProducts(response.data);
    console.log(response.data);
  }

  return (
    <Container>
      <ContainerHeader>
        <ContentHeader>
          <nav>
            <Link to="/">ROOTS</Link>
          </nav>

          <Form onSubmit={searchProduct} autoComplete="off">
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

      {
        products &&
        <Carousel
          products={productsCarousel}
        />
      }
      <Menu />

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
