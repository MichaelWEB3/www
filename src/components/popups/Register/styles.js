import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

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
`;

export const Logo = styled.div`
  position: absolute;
  top: 16px;
  right: 111px;

  @media (max-width: ${SCREEN_SIZES.sm}) {
    top: 16px;
    left: auto;
  }
`

export const Inputs = styled.div`
  width: 285px;
  height: 33px;
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
export const ContentForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 50px 0;
  margin-top: 60px;

  h1 {
    color: #fff;
    font-weight: 300;
    font-size: 33px;
    margin-bottom: 30px;
  }

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
    margin-top: 5px;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(80%);
    }

    svg {
      color: #000;
      font-size: 27px;
      margin-right: 3px;
    }
  }

  @media (max-width: ${SCREEN_SIZES.sm}) {
    margin-top: 200px;
  }
`;

export const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  
  
  input{
      width: 285px;
      height: 33px;
      padding: 10px;
      background: transparent;
      border: 1px solid #fff;
      border-radius: 5px;
      color: #fff;
      outline: none;
      margin-bottom: 13px;
      margin-right: 13px;

      &:last-child{
        margin-right: 0;
      }

      ::-webkit-input-placeholder {
        color: #fff;
        font-family: Ubuntu, sans-serif;
      }

      @media (max-width: ${SCREEN_SIZES.sm}) {
        margin-right: 0;
      }
    }
`;

export const Form = styled(Unform)`
  display: flex;  
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 285px;

  .forms-container{
    display: flex;
    justify-content:center;
    align-items:center;
  }


  &:last-child {
    margin-right: 0;
  }

  @media (max-width: ${SCREEN_SIZES.sm}) {
    flex-direction: column;
  }

`;
