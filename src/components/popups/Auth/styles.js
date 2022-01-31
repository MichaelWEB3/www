import styled from 'styled-components';

import background from '../../../assets/background-register.png';

import { SCREEN_SIZES } from '../../../utils/screen';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Background = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-image: url(${background});
  background-clip: content-box; 
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (max-width: ${SCREEN_SIZES.sm}) {
    justify-content: center;
  }
`;

export const Logo = styled.div`
  position: absolute;
  top: 16px;
  right: 111px;

  @media (max-width: ${SCREEN_SIZES.sm}) {
    top: 16px;
    right: auto;
  }
`

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 285px;
  margin-top:150px;

  h1 {
    font-size: 36px;
  }

  /* @media (max-width: ${SCREEN_SIZES.sm}) {
    margin-right: 0;
  } */
`

export const Inputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;  
  margin-top: 18px;

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
  }
`

export const Forgot = styled.h2`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');

  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: normal;
  color: #fff;
  margin: 10px 0 30px;
  cursor: pointer; 

  transition: opacity 0.2s;

  &:hover{
    opacity: 80%;
  }
`
export const SocialButtons = styled.div`
  display: flex;
  flex-direction: column;  

  button {
    width: 285px;
    height: 64px;
    cursor: pointer;
    border: none;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-weight: bold;
    font-size: 18px;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(80%);
    }

    svg {
      font-size: 32px;
      margin-right: 15px;
    }
  }

  &:last-child{
    margin-top: 0;
  }

  button.facebook{
    margin-bottom: 18px;
    background: #3B6CAF;
    color: #fff;
  }

  button.gmail{
    color: #0009;
    background: #fff;
  }
`