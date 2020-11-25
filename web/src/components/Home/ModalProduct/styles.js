import styled from 'styled-components';

export const Container = styled.div`
  display: ${props => (props.active ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.3);

  button {
    margin-bottom: 30px;
    border-radius: 50%;
    height: 44px;
    width: 44px;
    border: 0;
    outline: 0;
  }

  img {
    height: 80%;
    width: 80%;
  }
`;
