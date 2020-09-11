import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const Products = styled.div`
  margin: 50px 100px 50px 100px;

  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 50px;
    list-style: none;
  }

  @media (max-width: 1150px) {
    ul {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 900px) {
    ul {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 700px) {
    ul {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;