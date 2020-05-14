import styled, { keyframes } from 'styled-components';

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

  @media (min-width: 320px) and (max-width: 480px) {
    .div-link {
      a {
        width: auto;
      }
    }
  }
`;

export const FormContainer = styled.div``;

export const Form = styled.form`
  display: flex;
  max-width: 500px;
  margin: 10px auto;
  justify-content: center;

  input {
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }

  input + input {
    margin-left: 5px;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
    input {
      width: 100%;
      text-align: center;
      margin-bottom: 3px;
    }

    input + input {
      margin: 0;
    }
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

export const FormAddSerie = styled.form`
  display: flex;
  justify-content: center;
  align-items: baseline;
  max-width: 300px;
  width: 320px;
  margin: 0;

  input {
    margin-top: 10px;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
    margin: 0;
    input {
      text-align: center;
      width: 100%;
      margin-bottom: 10px;
    }
  }
`;

export const SubmitButton = styled.button`
  margin-left: 5px;
  background: #202020;
  border: 0;
  padding: 0 10px;
  height: 30px;
  border-radius: 4px;

  @media (min-width: 320px) and (max-width: 480px) {
    height: 35px;
    margin: 0 auto;
    width: 20%;
  }
`;

export const ButtonSave = styled.button`
  background: #202020;
  border: 0;
  padding: 0 10px;
  height: 30px;
  border-radius: 4px;
  color: white;
  width: 500px;
  margin-top: 10px;
  margin-bottom: 50px;

  &:hover,
  &:focus {
    background: #544f4f;
  }
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
