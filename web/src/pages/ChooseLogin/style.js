import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100vh;
  background: #F6F6F6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 28px;
  }

  @media (max-width: 450px) {
    h1 {
      font-size: 22px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  margin-top: 20px;
  
  button {
    margin: 0 10px 20px 10px;
    height: 64px;
    width: 200px;
    background: #FF6702;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 18px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.07, '#FF6702')};
    }
  }

  @media (max-width: 450px) {
    flex-direction: column;
  }
`;

export const Back = styled.div`
  margin-top: 70px;

  nav {
    a {
      font-size: 20px;
      font-weight: bold;
      color: #FF6702;
      text-decoration: none;
    }
  }
`;
