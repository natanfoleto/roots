import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Carousel } from 'react-bootstrap';

import { Container } from './styles';

function BCarousel({ products }) {
  const carouselItem = {
    height: '500px',
  }

  const imgSize = {
    height: '500px'
  }

  return (
    <Container>
      <Carousel>
        {/* {
          products && products.map((product) => (
            <Carousel.Item style={carouselItem} key={product.id}>
              <img
                className="d-block w-100"
                src={product.photos[0].url}
                alt={product.nome}
                style={imgSize}
              />
              <Carousel.Caption>
                <h3>{product.nome}</h3>
                <p>R${product.valor},00</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))
        } */}

        <Carousel.Item style={carouselItem}>
          <img
            className="d-block w-100"
            src="https://casaefesta.com/wp-content/uploads/2020/01/tons-de-verde-01-1.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Segundo título</h3>
            <p>Um teste de carousel no bootstrap.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item style={carouselItem}>
          <img
            className="d-block w-100"
            src="https://www.remocamisetas.com.br/img/portfolio/grid/goiaba.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Terceiro título</h3>
            <p>Ultima foto deste carousel.</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </Container>
  );
}

export default BCarousel;