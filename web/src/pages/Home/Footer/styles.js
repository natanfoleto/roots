import styled from 'styled-components';

export const Container = styled.div`
  background: #FF6702;
  padding: 0 30px;
  height: 200px;
  margin: 10px 0 0 0;
  
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
`;
