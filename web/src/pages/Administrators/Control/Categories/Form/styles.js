import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 80%;
  margin: 50px auto;
  padding: 30px 40px;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;

  h1 {
    font-size: 22px;
    margin: 0 0 15px 0;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    background: transparent;
    border: 1px solid #666;
    border-radius: 2px;
    padding: 4px;
    outline: 0;
  }
`;

export const Forms = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;

  form {
    width: 40%;
    display: flex;
    flex-direction: column;
    margin-top: 15px;

    input, select {
      background: #fff;
      border: 1px solid rgba(0, 0, 0, 0.3);
      border-radius: 4px;
      height: 44px;
      /* width: 44px; */
      padding: 10px 15px;
      color: #000;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(0, 0, 0, 0.6);
      }
    }

    select {
      padding: 0px 10px;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }

    button {
      height: 44px;
      background: #FF6702;
      font-weight: bold;
      color: #fff;
      border: 0;
      outline: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.07, '#FF6702')};
      }
    }
  }
`;
