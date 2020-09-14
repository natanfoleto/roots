import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100vh;
  background: #F6F6F6;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  h1 {
    color: #FF6702;
    font-weight: bold;
    font-size: 60px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    input {
      background: #fff;
      border: 1px solid rgba(0, 0, 0, 0.3);
      border-radius: 4px;
      height: 44px;
      padding: 10px 15px;
      color: #000;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(0, 0, 0, 0.6);
      }
    }

    button {
      margin: 5px 0 20px 0;
      height: 44px;
      background: #FF6702;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.07, '#FF6702')};
      }
    }

    a {
      color: #000;
      margin-top: 5px;
      font-size: 16px;
      text-decoration: none;

      &:hover {
        opacity: 0.8;
      }
    }
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
