import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #FF6702;
  padding: 30px 30px;
  height: auto;
  margin: 10px 0 0 0;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    min-width: 200px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  div {
    color: #eee;
    display: flex;
    flex-direction: column;
    width: auto;
    max-width: 400px;
    margin: 0 50px 0 50px;
    

    h1 {
      font-size: 20px;
      padding-bottom: 10px;
      border-bottom: 2px solid #fff; 
      margin-bottom: 15px;
    }

    p {
      margin-bottom: 5px; 
    }

    a {
      color: #1454e6;
      text-decoration: none;
    }

    button {
      margin-top: 10px;
      height: 28px;
      width: 100px;
      padding: 0 5px 0 5px;
      outline: 0;
      background: #fff;
      color: #FF6702;
      border: 1px solid #eee;
      border-radius: 2px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.08, '#fff')};
      }
    }
  }

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    div {
      margin-top: 50px;
    }
  }
`;

export const Social = styled.p`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  
  img {
    height: 40px;
    width: 40px;
  }
`;

export const Copyright = styled.div`
  color: #fff;
  font-size: 14px;
  margin-top: 15px
`;
