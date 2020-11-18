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

  @media (max-width: 950px) {
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .site {
    a {
      color: #FFF;
    }
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    @media (max-width: 950px) {
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    header {
      display: flex;
      align-items: center;
      padding-right: 30px;
      border-right: 2px solid rgba(255, 255, 255, 0.5);

      @media (max-width: 950px) {
        padding: 0;
        border: 0;
      }

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

      @media (max-width: 950px) {
        margin: 10px 0;
      }
    }    
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 2px solid rgba(255, 255, 255, 0.5);

  @media (max-width: 950px) {
    display: flex;
    justify-content: center;
    margin-left: 0;
    padding: 10px 5px 0 5px;
    background: #0038BA;
    border-left: 0;
  }

  div {
    text-align: right;

    strong {
      display: block;
      color: #0038BA;

      @media (max-width: 950px) {
        display: none;
      }
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #eee;
      text-decoration: none;

      @media (max-width: 950px) {
        margin-bottom: 10px;
      }
    }
  }
`;
