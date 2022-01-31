import styled from 'styled-components';

export const Select = styled.div`
  position: relative;
  select {
    width: 100%;
    height: 41px;
    padding: 0 10px;
    background: transparent;
    color: #fff;
    outline: none;
    border: 1px solid #fff;
    margin-bottom: 15px;

    -webkit-appearance: none;
    -moz-appearance: none;
    border-radius: 5px;

    font-family: 'Spinnaker', sans-serif;
    font-size: 14px;
  }

  select:required:invalid {
    color: white;
  }

  svg {
    font-size: 38px;
    position: absolute;
    right: 0;
    top: 2px;
    color: #fff6;
    z-index: 0;
  }
`;

export const Input = styled.div`
  input {
    width: 100%;
    height: 41px;
    padding: 0 10px;
    background: transparent;
    color: #fff;
    outline: none;
    border: 1px solid #fff;

    -webkit-appearance: none;
    -moz-appearance: none;
    border-radius: 5px;

    font-family: 'Spinnaker', sans-serif;
    font-size: 14px;
  }
`;

export const InputLongText = styled.div`
  margin-top: 15px;
  textarea {
    width: 100%;
    height: 124px;
    padding: 0 10px;
    background: transparent;
    color: #fff;
    outline: none;
    border: 1px solid #fff;
    padding: 10px;

    -webkit-appearance: none;
    -moz-appearance: none;
    border-radius: 5px;

    font-family: 'Spinnaker', sans-serif;
    font-size: 14px;
    resize: none;

    ::-webkit-scrollbar-thumb{
      background: ${({ theme }) => theme.palette.primary.main};
    }

    ::-webkit-input-placeholder {
      color: white;
    }
  }
`;

export const DateTime = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 12px;
`;

export const InputDate = styled.div`
  width: 60%;
  position: relative;
  input {
    width: 100%;
    height: 41px;
    padding: 0 10px;
    background: transparent;
    color: #fff;
    outline: none;
    border: 1px solid #fff;

    -webkit-appearance: none;
    -moz-appearance: none;
    border-radius: 5px;

    font-family: 'Spinnaker', sans-serif;
    font-size: 14px;
  }

  img {
    position: absolute;
    right: 10px;
    bottom: 10px;
  }
`;

export const InputTime = styled.div`
  width: 38%;
  position: relative;

  input{
    width: 100%;
    height: 41px;
    padding: 0 10px;
    background: transparent;
    color: #fff;
    outline: none;
    border: 1px solid #fff;

    -webkit-appearance: none;
    -moz-appearance: none;
    border-radius: 5px;

    font-family: 'Spinnaker', sans-serif;
    font-size: 14px;
  }

  img {
    position: absolute;
    right: 10px;
    bottom: 12px;
  }
`;

export const Title = styled.div`
  color: #fff;
  font-size: 14px;
  text-transform: lowercase;
  margin: 15px;
`;


export const InputParticipantes = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .inline {
    display: flex;
    justify-content: space-between;
  }

  input {
    width: 87%;
    height: 41px;
    padding: 0 10px;
    background: transparent;
    color: #fff;
    outline: none;
    border: 1px solid #fff;

    -webkit-appearance: none;
    -moz-appearance: none;
    border-radius: 5px;

    font-family: 'Spinnaker', sans-serif;
    font-size: 14px;
    margin-bottom: 10px;
  }

  button {
    background: ${({theme}) => theme.palette.primary.main};
    width: 40px;
    height: 40px;
    border-radius: 50%;
    outline: none;
    font-size: 30px;
    border: none;
    cursor: pointer;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(75%);
    }
  }
`;

export const Classificacao = styled.div`
  display: flex;
  align-items: baseline;
`;

export const ButtonClass = styled.button`
      margin-top: 15px;
      width: 24px;
      height: 24px;
      background: ${({color, theme}) => color ? theme.palette.primary.main : '#fff'};
      border-radius: 2px;
      border: none;
      outline: none;
      margin-right: 10px;

      cursor: pointer;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(75%);
      }

      &:last-child {
        margin-right: 0;
      }
`;

export const InputValue = styled.div`
  margin-top: 8px;
  input {
    width: 100%;
    height: 41px;
    padding: 0 10px;
    background: transparent;
    color: ${({theme}) => theme.palette.primary.main};
    outline: none;
    border: 1px solid #fff;

    -webkit-appearance: none;
    -moz-appearance: none;
    border-radius: 5px;

    font-family: 'Spinnaker', sans-serif;
    font-size: 14px;

    ::-webkit-input-placeholder {
      color: ${({theme}) => theme.palette.primary.main};
    }
  }
`;

export const Button = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 18px;
  margin-bottom: 30px;

  button {
    width: 209px;
    height: 49px;
    background: #FDCC12;
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #000;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(80%);
    }

    svg {
      color: #000;
      font-size: 27px;
      margin-left: 8px;
    }
  }
`