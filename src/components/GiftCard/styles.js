import styled from 'styled-components';
import cardGift from '../../assets/cardGift.png';

export const Container = styled.div`
  width: 250px;
  height: 250px;
  
  background-image: url(${cardGift});
  background-repeat: no-repeat;
`;

export const Modal = styled.div`
  width: 100%;
  height: 100%;
  background: #0008;
  cursor: pointer;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-end;
  padding: 5px;

  svg {
    color: #fff;
    font-size: 24px;
    transition: filter 0.2s;
    cursor: pointer;

    &:hover{
      filter: brightness(70%);
    }
  }
`;

export const Content = styled.div`
  width: 90%;
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  svg {
    color: #fff;
    font-size: 34px;
    transition: filter 0.2s;
  }

  cursor: pointer;
  transition: filter 0.2s;

  &:hover{
    filter: brightness(70%);
  }
`;

export const ContentAdmin = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 40px auto 0;
`;

export const Button = styled.button`
    width: 100%;
    color: #000;
    background: ${({theme}) => theme.palette.primary.main};
    border: none;
    border-radius: 5px;
    padding: 10px;
    outline: none;
    cursor: pointer;
    transition: filter 0.2s;
    font-size: 18px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      font-size: 24px;
      margin-right: 5px;
      color: #000;
    }

    &:hover{
      filter: brightness(70%);
    }
`;

export const Info = styled.div`
  margin-top: 15px;
  display: flex;
  width: 100%;
  color: #fff;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
  transition: filter 0.2s;

  &:hover{
    filter: brightness(70%);
  }

  svg {
    margin-right: 5px;
  }
`;

export const Line = styled.div`
  display: flex;
  color: ${({color, theme}) => color ? theme.palette.primary.main : '#fff'};
  align-items: center;
  font-size: 14px;
  margin-bottom: 10px;

  svg {
    color: ${({color, theme}) => color ? theme.palette.primary.main : '#fff'};
    font-size: 22px;
    margin-right: 5px;
  }
`;
