import styled from 'styled-components';
import { darken } from 'polished';

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

export const ContainerHeader = styled.div`
  background: #FF6702;
  padding: 0 30px;
`;

export const ContentHeader = styled.div`
  height: 85px;
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
      font-size: 40px;
      color: #FFF;
      text-decoration: none;
    }
  }

  input {
    border: 0;
    border-radius: 25px;
    height: 36px;
    width: 350px;
    padding: 0 15px;

    &::placeholder {
      color: rgba(0, 0, 0, 0.7);
    }
  }

  button {
    height: 36px;
    padding: 0 15px 0 15px;
    outline: 0;
    background: #fff;
    color: #FF6702;
    border: 1px solid #eee;
    border-radius: 24px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.08, '#fff')};
    }
  }

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    padding: 15px 0 15px 0;
    height: auto;

    nav {
      margin: 0 0 10px 0;
    }

    input {
      margin: 0 0 15px 0;
    }
  }

  @media (max-width: 380px) {
    input {
      display: none;
    }
  }
`;
