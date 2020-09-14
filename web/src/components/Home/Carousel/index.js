import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Carousel } from 'react-bootstrap';


import { Container } from './styles';

function BCarousel() {
  const carouselItem = {
    height: '500px',
  }

  return (
    <Container>
      <Carousel>
        <Carousel.Item style={carouselItem}>
          <img
            className="d-block w-100"
            src="https://cdn.dicionariopopular.com/imagens/image-53.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Primeiro título</h3>
            <p>Descrição de uma foto do slide.</p>
          </Carousel.Caption>
        </Carousel.Item>

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