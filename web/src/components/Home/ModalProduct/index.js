import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function ModalProduct({ photo, actived, ...rest }) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    setActive(actived);
  })

  function handleClose() {
    setActive(false)
  }

  return (
    <Container active={active} {...rest}>
      <button onClick={handleClose}>X</button>
      <img
        src={photo}
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