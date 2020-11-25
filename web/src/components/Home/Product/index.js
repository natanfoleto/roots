import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Container } from './styles';

import ModalProduct from '../ModalProduct';

function Product({ id, nome, categoria, ativo, valor, photos, ...rest }) {
  return (
    <>
      <Container {...rest}>
        <li>
          <button>
            <img
              className="d-block w-100"
              src={photos.length > 0 ? photos[0].url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQqvvCCFRAASaxwrYf-Gm73LgEezxHjqM9IIw&usqp=CAU'}
              alt="First slide"
            />
          </button>
        </li>

        <Link to="/">{nome}</Link>

        <p>R$ {valor}</p>
      </Container>

      <ModalProduct />
    </>
  );
}

Product.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

Product.defaultProps = {
  id: null,
  nome: null,
  categoria: null,
  ativo: null,
  valor: null,
  photos: null
}

export default Product;