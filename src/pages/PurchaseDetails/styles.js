import styled from 'styled-components';

import background from '../../assets/backgroundGiftshop.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 700px;
  align-items: center;

  width: 100%;
  
  background: url(${background});
  background-repeat: no-repeat;
  background-position: right;
  background-size: auto 100%;
  
  .perfil { 
    width: 100%;
    margin: 100px 0;
  }
`;

export const Title = styled.div`
  color: #fff;
  font-weight: normal;
  font-size: 20px;
  margin-left: 61px;
  width: 100%;
`;

export const Button = styled.div`
    width: 100px;
    height: 49px;
    background: #FDCC12;
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 18px;
    border-radius: 5px;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #000;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(80%);
    }

    &:last-child{
      margin-bottom: 0;
    }

    svg {
      color: #000;
      font-size: 27px;
      margin-right: 3px;
    }
`