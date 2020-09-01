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
            src="https://s2.best-wallpaper.net/wallpaper/1920x1080/1801/Lovers-happy-man-and-woman_1920x1080.jpg"
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
            src="https://mfiles.alphacoders.com/802/802100.jpg"
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
            src="https://http2.mlstatic.com/roupa-tumblr-blusa-feminina-camiseta-baby-look-tshirt-barato-D_NQ_NP_950708-MLB28974402047_122018-F.jpg"
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