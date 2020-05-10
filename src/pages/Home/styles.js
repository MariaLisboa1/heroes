import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  padding: 20px;

  h1 {
    text-align: center;
    color: #202020;
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;

  input {
    flex: 1;
    border: ${(props) =>
      props.notFoundUser ? '1px solid red' : '1px solid #eee'};
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs((props) => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #202020;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${(props) =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 191px;
  height: 354px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  margin: 40px 20px;
  background: #151515;
  border-radius: 5px;

  img {
    width: 191px;
    height: 203px;
    border-bottom: 2px solid red;
  }

  h3 {
    text-transform: uppercase;
    margin: 10px 5px;
  }

  a {
    color: #f0141e;
    font-size: 16px;
    text-decoration: none;
    text-align: center;

    &:hover {
      color: #910c12;
    }
  }
`;

export const CardGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: #fff;
`;
