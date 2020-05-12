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

export const CardGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: #fff;
  justify-content: center;
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

export const ButtonList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding-bottom: 70px;
`;

export const Button = styled.button.attrs((props) => ({
  disabled: props.lastPage,
}))`
  margin-right: 5px;
  background: #151515;
  border: 0;
  padding: 10px 15px;
  margin-left: 10px;
  border-radius: 4px;
  color: white;

  &:hover,
  &:focus {
    background: #544f4f;
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const NoHaveHero = styled.div`
  text-align: center;
  margin-top: 10px;
  font-weight: bold;
  color: red;
`;

export const Loading = styled.div`
  margin: 0 auto;
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-left-color: #151515;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${rotate} 2s linear infinite;
`;
