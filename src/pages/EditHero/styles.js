import styled, { css, keyframes } from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  margin: 0 auto;

  h1 {
    text-align: center;
    color: #202020;
  }

  form,
  div {
    max-width: 500px;
    margin: 10px auto;
  }
  table {
    color: #fff;
    max-width: 800px;

    thead {
      background: #202020;
    }

    tbody {
      background: #424242;
    }

    th {
      color: white;
    }

    td {
      cursor: pointer;
    }
  }

  .div-link {
    width: 100%;
    padding-top: 10px;
    padding-bottom: 70px;
    margin: 0 auto;
    text-align: center;
    a {
      display: block;
      background: #151515;
      border: 0;
      padding: 10px 15px;
      border-radius: 4px;
      color: white;
      width: 500px;
      margin: 10px auto;
      text-decoration: none;

      &:hover,
      &:focus {
        background: #544f4f;
      }
    }
  }
`;

export const FormContainer = styled.div``;

export const Form = styled.form`
  display: flex;
  max-width: 500px;
  margin: 10px auto;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const FormAddSerie = styled.form`
  display: flex;
  align-items: baseline;
  max-width: 300px;
  width: 300px;
`;

export const SubmitButton = styled.button.attrs((props) => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #202020;
  border: 0;
  padding: 0 10px;
  height: 30px;
  border-radius: 4px;

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
