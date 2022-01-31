import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #1b1b1b;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
`;


export const Button = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  button {
    width: 150px;
    height: 50px;
    background-color: ${({ theme }) => theme.palette.primary.main};
    border: 0;
    font-weight: bold;
    font-size: 18px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: filter 0.2s;
    outline: none;
    cursor: pointer;

    &:hover {
      filter: brightness(80%);
    } 
  }

  svg {
    font-weight: bold;
    font-size: 18px;
    font-style: normal;
    margin-right: 5px;
  }
`;