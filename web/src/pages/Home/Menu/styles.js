import styled from 'styled-components';

export const Container = styled.div`
  background: #FF6702;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 44px;
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
      font-size: 14px;
      color: #FFF;
      text-decoration: none;
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
