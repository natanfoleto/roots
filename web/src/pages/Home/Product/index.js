import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

function Product() {
  return (
    <Container>
      <li>
        <button>
          <img
            className="d-block w-100"
            src="https://images-shoptime.b2w.io/produtos/01/00/sku/17352/7/17352743_1GG.jpg"
            alt="First slide"
          />
        </button>
      </li>

      <Link to="/">Polo masculina Lacoste Slim Fit em Piqué de pima com stretch e colorblock</Link>

      <p>R$ 249,90</p>
    </Container>
  );
}

export default Product;