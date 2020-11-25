import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function ModalProduct({ id, nome, categoria, ativo, valor, photos, ...rest }) {
  return (
    <Container {...rest}>
      <button>X</button>
      <img
        src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQqvvCCFRAASaxwrYf-Gm73LgEezxHjqM9IIw&usqp=CAU'}
        alt="First slide"
      />
    </Container>
  );
}

ModalProduct.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

ModalProduct.defaultProps = {
  id: null,
  nome: null,
  categoria: null,
  ativo: null,
  valor: null,
  photos: null
}

export default ModalProduct;