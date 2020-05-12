import styled from 'styled-components';

export const Container = styled.div`
  padding: 50px;
  text-align: center;

  a {
    display: block;
    margin-top: 10px;
    cursor: pointer;
    color: #f0141e;
    font-weight: 500;

    &:hover,
    &:focus {
      color: #910c12;
    }
  }
`;
