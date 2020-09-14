import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #FF6702;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 60px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    header {
      display: flex;
      align-items: center;
      padding-right: 30px;
      border-right: 2px solid rgba(255, 255, 255, 0.5);

      a {
        margin: 0;
        font-weight: bold;
        font-size: 30px;
        color: #FFF;
        text-decoration: none;
      }
    }

    a {
      margin-left: 30px;
      margin-right: 30px;
      font-weight: bold;
      font-size: 16px;
      color: #FFF;
      text-decoration: none;

      &&:hover {
        color: ${darken(0.08, '#fff')};
      }
    }    
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 2px solid rgba(255, 255, 255, 0.5);

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #000;
      text-decoration: none;
    }
  }
`;
