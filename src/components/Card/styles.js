import styled from 'styled-components';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');

  width: 250px;
  height: 360px;

  background-image: ${({img}) => img ? `url(${img})` : '#000'};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: black;

  display: flex;
  justify-content: center;
  align-items:center;
  flex-direction: column;
 
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
    font-size: 32px;
    transition: filter 0.2s;
    cursor: pointer;

    &:hover{
      filter: brightness(70%);
    }
  }
`;

export const Content = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  h1 {
    font-weight: bold;
    font-size: 24px;
    color: #fff;
    text-align: center;
    line-height: 1.5;
  }

  h2 {
    font-size: 18px;
    font-weight: normal;
    color: #fff;
    text-align: center;
    line-height: 1;
  }

  p {
    color: #fff;
    text-align: center;
    font-weight: normal;
    margin-top: 15px;
    font-size: 14px;
    line-height: 1;
    font-family: 'Roboto', sans-serif;
  }
`;

export const Stars = styled.div`
  margin-top: 15px;

  svg {
    color: ${({theme}) => theme.palette.primary.main};
    font-size: 32px;
    cursor: pointer;
  }
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
    }

    &:hover{
      filter: brightness(70%);
    }
`;

export const Info = styled.div`
  font-family: 'Roboto', sans-serif;
  margin-top: 15px;
  display: flex;
  width: 100%;
  color: #fff;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
  transition: filter 0.2s;

  &:hover{
    filter: brightness(70%);
  }

  svg {
    margin-right: 10px;
  }
`;

export const CardEmpty = styled.div`
  width: 250px;
  height: 360px;
  /* background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('../../assets/logoPalcoweb.png'); */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  opacity: 0.4;

  img {
    object-fit: contain;
    width: 90%;
    height: 40px;
  }


`;