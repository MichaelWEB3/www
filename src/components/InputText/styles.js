import styled from 'styled-components';

export const Container = styled.div`

  p {
    color: #fff;
    margin: 0 0 10px 2px;
  }
`;

export const content = styled.div`
  width: ${({width}) => width ? width : '253px'};
  height:  ${({height}) => height ? height : '40px'};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5A5A5A;
  border-radius: 10px;

  input {
    width: 100%;
    height: 100%;
    border: none;
    border-color: none;    
    outline: none;
    padding: 0 5px 0 5px;
    border-radius: 10px;
    background-color: #5A5A5A;
    color: #fff;
  }
  input::placeholder {
    color: #aaa;
  }

  svg {
    font-size: 30px;
    margin: 0 5px 0 5px;
    color: ${({theme}) => theme.palette.primary.dark};
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
      -moz-appearance: textfield;
  }

`;
