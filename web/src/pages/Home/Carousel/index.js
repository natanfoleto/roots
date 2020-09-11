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
            src="https://image.winudf.com/v2/image1/Y29tLm1vYmlsZXVuaXZlcnNpdHkucHN5Y2hlZGVtaWNfc2NyZWVuXzFfMTU0NDU0MDU5NV8wNDE/screen-1.jpg?fakeurl=1&type=.jpg"
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
            src="https://4.bp.blogspot.com/-EFQEXmmdBXo/XKG5Noll6xI/AAAAAAAABGw/2epUYa2fuEUzCK0Q9J4ncAr88cG5Q2XSQCKgBGAs/w914-h514-p-k-no-nu/space-astronaut-sci-fi-uhdpaper.com-4K-111.jpg"
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
            src="https://images.hdqwalls.com/wallpapers/spiderman-miles-lost-in-space-4k-0f.jpg"
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