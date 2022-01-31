import styled from 'styled-components';
// import { SCREEN_SIZES } from '../../utils/screen';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #1b1b1b;
  width: 95%;
  align-items: center;
  margin: 0 auto;
`;

export const Infos = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  position: relative;
`;

export const LogoSocial = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 120px;
    height: 120px;
  }
`;

export const Social = styled.div`
  display: flex;
  margin-top: 10px;

  img {
    width: 38px;
    height: 38px;
    margin-right: 5px;
    cursor: pointer;

    transition: filter 0.2s;

    &:last-child {
      margin-right: 0;
    }
    
    &:hover {
      filter: brightness(80%);
    }
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;

  h3{
    color: #fff;
    margin-right: 25px;
    font-weight: normal;
    font-size: 14px;
    cursor: pointer;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(75%);
    }

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const Filter = styled.div`
  display: flex;
  width: 1060px;
  justify-content: space-between;
  color: #fff;
  cursor: pointer;
  transition: filter 0.2s;
  margin: 50px 0 10px 0;
  svg {
    font-size: 25px;
  }

  &:hover {
    filter: brightness(75%);
  }
`;

export const Ordenar = styled.div`
  display: flex;
  align-items: center;

  svg {
    font-size: 20px;
    margin: 4px 0 0 2px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
    width: 209px;
    height: 49px;
    background: #FDCC12;
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0 50px;
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
      font-size: 18px;
      margin-right: 0;

      &:last-child{
      margin-right: 10px;
      }
    }

`