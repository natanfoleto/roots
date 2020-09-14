import styled from 'styled-components';

export const Container = styled.div`
  button {
    border: 0;
    outline: 0;
  }

  li {
    margin-bottom: 10px;

    &:hover {
      opacity: 0.9;
    }
  }

  a {
    margin-top: 10px;
    font-size: 14px;
    color: #000;
  }

  p {
    margin-top: 10px;
    font-size: 15px;
    font-weight: bold;
    color: orange;
   }
`;
