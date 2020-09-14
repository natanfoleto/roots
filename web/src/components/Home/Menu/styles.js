import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #FF6702;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 60px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    a {
      font-weight: bold;
      font-size: 16px;
      color: #FFF;
      text-decoration: none;

      &:hover {
        color: ${darken(0.08, '#fff')};
      }
    }
  }

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    padding: 15px 0 15px 0;
    height: auto;

    nav {
      a {
        margin: 5px 0 5px 0;
      }
    }
  }
`;
