import styled from 'styled-components';

export const Container = styled.footer`
  padding: 20px;
  background: #202020;
  color: #b1aa9b;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;

export const Copyright = styled.div`
  text-align: center;
  color: white;
  a {
    cursor: pointer;
    color: #f0141e;
    font-weight: 500;
    text-decoration: none;

    &:hover,
    &:focus {
      color: #910c12;
    }
  }
`;
