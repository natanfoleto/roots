import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  margin: 50px 100px;

  @media (max-width: 865px) {
    margin: 50px 0;
  }
`;

export const Menu = styled.div`
  display: flex;
  margin-bottom: 15px;

  @media (max-width: 865px) {
    justify-content: center;
  }

  button {
    height: 46px;
    width: 46px;
    outline: 0;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-right: 10px;

    &:hover {
      background: ${darken(0.08, '#fff')};
    }
  }
`;
